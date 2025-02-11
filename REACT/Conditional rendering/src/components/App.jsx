import React from "react";
import Input from "./Input";
import Login from "./Login";

var isLogggedIn = false;

function Render() {
  if (isLogggedIn == true) {
    return <h1>Hello</h1>;
  } else {
    return <Login />;
  }
}

function App() {
  return (
    <div className="container">{isLogggedIn ? <h1>Hello</h1> : <Login />}</div>
  );
}

export default App;
