import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.get("/", async(req, res)=>{
    try {
        const result = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
        const drink = result.data.drinks[0];
        res.render("index.ejs", {
            type:drink.strAlcoholic,
            catagory:drink.strCategory,
            glass:drink.strGlass,
            instruction:drink.strInstructions
        })
    } catch (error) {
        console.log(error);
        res.status(404).send("there is somthing wrong with the server..!");
    }
  
})


app.listen(port, ()=>{
    console.log(`app runing on port ${port} `);
})