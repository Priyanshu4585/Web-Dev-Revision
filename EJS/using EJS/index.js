import express from "express";
const app = express();
const port = 3000;
var dayToday = "a workday";
var day = new Date().getDay();
var work ="work hard!";

app.get("/",(req,res)=>{
    if(day===0 || day===6){
        dayToday="the weekend"
        work="have Fun!"
    }
    res.render("index.ejs",
        { day: dayToday ,
         work: work
         })
})


app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})
