import React from "react";
import ReactDOM from "react-dom";
import Pi, { DoublePi, TriplePi } from "./Math";

ReactDOM.render(
  <ul>
    <li>{Pi}</li>
    <li>{DoublePi(TriplePi)}2</li>
    <li>{TriplePi(DoublePi)}3</li>
  </ul>,
  document.getElementById("root")
);
