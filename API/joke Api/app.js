import axios from "axios";
import express from "express";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

const BASE_URL = "https://v2.jokeapi.dev/joke/";

app.get("/", async (req, res) => {
  try {
    res.render("index.ejs");
  } catch (error) {
    res.status(500).send("Error fetching joke");
    console.log(error.response ? error.response.data : error.message);
  }
});

app.post("/submit", async (req, res) => {
  try {
    const selectedCategory = req.body.radioCategory;
    const customizedCategories = req.body.categories;

    let categoryURL = BASE_URL + "Any?format=txt"; 

    if (selectedCategory === "customize" && customizedCategories) {
      const selectedCategoriesString = customizedCategories.join(",");
      categoryURL = `${BASE_URL}${selectedCategoriesString}?format=txt`;
    }
    const result = await axios.get(categoryURL);
    res.render("index.ejs", { joke: result.data });
  } catch (error) {
    res.status(500).send("Error fetching joke");
    console.log(error.response ? error.response.data : error.message);
  }
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
