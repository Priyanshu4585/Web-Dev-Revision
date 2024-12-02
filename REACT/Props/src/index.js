import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.src} alt="avatar_img" />
      <p>{props.phone}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      email="b@gmail.com"
      name="Beyonce"
      src="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      phone="123456789"
    />
    <Card
      phone="987654321"
      email="jhon@gmail.com"
      name="Jack bauer"
      src="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
    />
  </div>,
  document.getElementById("root")
);
