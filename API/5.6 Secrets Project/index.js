import express from "express"
import axios from "axios"

const app = express()
const port = 3000
const Base_Url = "https://secrets-api.appbrewery.com/random"

app.use(express.static("public"));


app.get("/",async (req,res)=>{
try {
    const response = await axios.get(Base_Url);   
    res.render("index.ejs",{
        secret: response.data.secret,
        user : response.data.username,
    })   
} catch (error) {
    console.log(error.response.data); 
    res.status(500)
}
})

app.listen(port,()=>{
console.log(`listening on port ${port}`)
})