import React from "react";

function App() {
  var [name, setName] = React.useState("");

  var [displayName, setDisplayName] = React.useState("");

  function handleName(event) {
    setName(event.target.value);
  }

  function changeName() {
    setDisplayName(name);
  }

  return (
    <div className="container">
      <h1>Hello {displayName} </h1>
      <input
        onChange={handleName}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={changeName}>Submit</button>
    </div>
  );
}

export default App;
