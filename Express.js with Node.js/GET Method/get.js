import express from "express";
var app = express();
var port = 3000;


app.get("/",(req,res)=>{
    res.send("<h1>HELLO</h1>");
})

app.get("/about",(req,res)=>{
    res.send("<h1>About me</h1>");
})


app.get("/contact",(req,res)=>{
    res.send("<h1>Contact me</h1>");
})


app.listen(port,()=>{
console.log(`listening on port ${port}`)
})