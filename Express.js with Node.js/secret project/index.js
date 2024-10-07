//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming


import express from "express";
import {dirname} from "path";
import {fileURLToPath}  from "url";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const __dirname =dirname(fileURLToPath(import.meta.url));

var access = false;
const password = "ILoveProgramming";

app.use(bodyParser.urlencoded({extended:true}));

function accessIs(req,res,next){
    if(password===req.body.password){
        access = true;
    }
next()
}

app.use(accessIs);

app.get("/",(req,res)=>{
    res.sendFile(__dirname+"/public/index.html");

})
app.post("/check",(req,res)=>{
     
    if(access){
        res.sendFile(__dirname+"/public/secret.html");
        access=false;
    } else {
        res.sendFile(__dirname + "/public/index.html");
    }
   
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})