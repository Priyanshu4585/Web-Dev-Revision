import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "PriyanshuSingh";
const yourPassword = "Priya@4585";
const yourAPIKey = "45b8ac90-1bdb-4b0e-acf4-537c2b63d29b";
const yourBearerToken = "fcefedf5-8f94-48e1-8228-a3c40cbdfbc8";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  try {
    const result = await axios.get(API_URL+"random");
    res.render("index.ejs", { content: JSON.stringify(result.data)});
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/basicAuth", async(req, res) => {
    try {
      const result = await axios.get(API_URL+"all?page=2" ,{
        auth:{
          username:yourUsername,
          password:yourPassword,
        }
      });
      res.render("index.ejs", { content: JSON.stringify(result.data)});
    } catch (error) {
      res.status(404).send(error.message);
    }
});

app.get("/apiKey", async(req, res) => {
  try {
    const result = await axios.get(API_URL+"filter?score=5&apiKey="+yourAPIKey);
    res.render("index.ejs", { content: JSON.stringify(result.data)});
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.get("/bearerToken", async (req, res) => {
  try {
    const result = await axios.get(API_URL+"secrets/51", {
      headers: { 
        Authorization: `Bearer ${yourBearerToken}` 
      },
    });
    res.render("index.ejs", { content: JSON.stringify(result.data)});
  } catch (error) {
    res.status(404).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
