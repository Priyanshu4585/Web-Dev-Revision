import React from "react";
import ReactDOM from "react-dom";

let message;
let color;
const time = new Date().getHours();

if (time < 12) {
  message = "Good Morning";
  color = "red";
} else if (time > 12 && time < 18) {
  message = "Good Afternoon";
  color = "green";
} else {
  message = "Good night";
  color = "blue";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={{ color: color }}>
      {message}
    </h1>
  </div>,
  document.getElementById("root")
);
//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
