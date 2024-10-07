import express from "express"; 
import {dirname} from 'path';
import {fileURLToPath} from 'url';
import bodyParser from "body-parser";

const app = express();
const port = 3000;

var __dirname = dirname(fileURLToPath(import.meta.url))

app.use(bodyParser.urlencoded({extended:true}))

app.get("/",(req,res)=>{
res.sendFile(__dirname+"/public/index.html")
})

app.post("/submit",(req,res)=>{
  var fName = req.body.street;
  var lName = req.body.pet;

  res.send(`<h1>Your Band Name Is :</h1><h1>${fName}${lName}✌️</h1>`)
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
