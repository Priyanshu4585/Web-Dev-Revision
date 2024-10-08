import express from "express";
import {dirname} from 'path';
import {fileURLToPath} from 'url';
const app = express();
const port = 3000;
var _dirname = dirname(fileURLToPath(import.meta.url))
var dayToday = "a workday";
var day = new Date().getDay();
var work ="work hard!";

app.get("/",(req,res)=>{
    if(day===0 || day===6){
        dayToday="the weekend"
        work="have Fun!"
    }
    res.render(_dirname+"/views/index.ejs",
        { day: dayToday ,
         work: work
         })
})


app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})