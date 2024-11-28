import React from "react";
import ReactDOM from "react-dom";
const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    <h1 className="heading">My Favourite Foods</h1>
    <img src={img + "?grayscale"} alt="" />
    <div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/5/5a/%22Hyderabadi_Dum_Biryani%22.jpg"
        alt=""
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/4/41/Butter_Chicken_%26_Butter_Naan_-_Home_-_Chandigarh_-_India_-_0006.jpg"
        alt=""
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Aloo_Paratha_also_known_as_Batatay_Jo_Phulko.jpg/330px-Aloo_Paratha_also_known_as_Batatay_Jo_Phulko.jpg"
        alt=""
      />
    </div>
  </div>,
  document.getElementById("root")
);
