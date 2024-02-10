import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

app.get("/", async(req, res)=>{
    try {
        const result = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
        res.json(result.data);
    } catch (error) {
        console.log(error);
    }
  
})


app.listen(port, ()=>{
    console.log(`app runing on port ${port} `);
})