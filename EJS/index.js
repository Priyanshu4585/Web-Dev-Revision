import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs",{
    data:"Enter your name below 👇"
  })
});

app.post("/submit", (req, res) => {
var fname = req.body.fName.length;
var lname = req.body.lName.length;
var noOfChar =fname+lname;

res.render("index.ejs",{
  data:`There are ${noOfChar} letters in your name`,
  // or use
  numberOfLetters : noOfChar
})

});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
