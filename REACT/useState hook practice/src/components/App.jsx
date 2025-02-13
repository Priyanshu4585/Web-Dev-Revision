import react from "react";
import React from "react";

function App() {
  var [time, refreshTime] = react.useState(
    new Date().toLocaleTimeString("en-GB")
  );

  function refresh() {
    refreshTime((time = new Date().toLocaleTimeString("en-GB")));
  }

  setInterval(refresh, 1000);

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={refresh}>Get Time</button>
    </div>
  );
}

export default App;
