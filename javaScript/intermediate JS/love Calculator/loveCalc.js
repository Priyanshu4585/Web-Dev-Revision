<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous"
    />
    <title>Love Calculator</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        text-align: center;
        padding: 20px;
        margin: 0;
        height: 100vh;
        background: linear-gradient(45deg, #ff758c, #ff7eb3, #fcd5ce);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        color: #fd273c;
      }
      input {
        margin: 5px;
        padding: 10px;
        width: 200px;
        border: none;
        border-radius: 5px;
      }
      button {
        padding: 10px 20px;
        margin-top: 10px;
        background-color: #ff4b5c;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        font-weight: bold;
      }
      button:hover {
        background-color: #ff2442;
      }
      h1 {
        margin-bottom: 10px;
      }
      h2 {
        color: #ff2442;
      }
    </style>
  </head>
  <body>
    <h1 class="fw-bolder">Love Calculator</h1>
    <p class="fw-bolder fs-5">Enter your names to calculate love percentage:</p>
    <input type="text" id="name1" placeholder="Your Name" />
    <input type="text" id="name2" placeholder="Partner's Name" />
    <br />
    <button onclick="calculateLove()" class="my-4">Calculate Love</button>

    <h2 id="result"></h2>
    <p id="about" class="fw-bolder text-dark-emphasis fs-5"></p>
    <p id="note" class="fw-bolder text-dark-emphasis fs-5"></p>

    <script>
      function calculateLove() {
        // Get the names from input fields
        var name1 = document.getElementById("name1").value;
        var name2 = document.getElementById("name2").value;
        var about = document.getElementById("about");
        var note = document.getElementById("note");
        // Ensure both names are provided
        if (name1 === "" || name2 === "") {
          alert("Please enter both names!");
          return;
        }

        // Generate a random love percentage
        var lovePercentage = Math.floor(Math.random() * 100) + 1;

        if (lovePercentage < 26) {
          about.innerHTML ="It looks like love isn't in full bloom just yet! With a love percentage of " +lovePercentage +"%, there's still plenty of room for growth. Remember, love isn’t all about numbers—it's about building connections, understanding each other, and growing together. So keep nurturing that bond, and who knows? This could just be the beginning of something amazing!";
        } else if (lovePercentage > 25 && lovePercentage < 51) {
          about.innerHTML =
            "You're off to a promising start with a love percentage of " +
            lovePercentage +
            "%! There’s definitely a spark between you two, but it might need a little more time and effort to turn into a full flame. Keep sharing moments, learning about each other, and enjoying the journey together. Love can grow in the most unexpected ways!";
        } else if (lovePercentage > 50 && lovePercentage < 76) {
          about.innerHTML =
            "With a love percentage of " +
            lovePercentage +
            "%, it’s clear that there’s a strong connection between you two! You’ve built a solid foundation, and things are looking bright. Keep stoking that fire by cherishing your time together and embracing what makes your relationship unique. You're well on your way to something special!";
        } else {
          about.innerHTML =
            "Wow! A love percentage of " +
            lovePercentage +
            "% means you're practically a perfect match! It’s clear that your bond is deep, and love is in full bloom. Keep nurturing your relationship with trust, communication, and shared joy. It looks like you're destined for great things together!";

        }

        note.innerHTML =
        "(Note : If the love % is changing that means that love between you is fluctuating there is no problem with my love Calculator ☺ )";

        // Display the result
        document.getElementById("result").innerHTML =
          name1 + " and " + name2 + " have a " + lovePercentage + "% match!";
      }
    </script>
  </body>
</html>