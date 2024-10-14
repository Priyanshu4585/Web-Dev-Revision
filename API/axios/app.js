import express from "express";
import axios from  "axios";


const port =3000;
const app = express()

app.get("/", async (req,res)=>{
try{
   const response = await axios.get("https://api.wheretheiss.at/v1/satellites/25544");
   res.render("index.ejs",{data : response.data})
}catch(error){

}
}
)


app.listen(3000,()=>{
console.log(`listening on port ${port}`)
})