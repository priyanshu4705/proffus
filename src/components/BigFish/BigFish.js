import React from "react";
import image from "../../assets/images/bigfish.png";
import "./BigFish.css";

function BigFish() {
  return (
    <div className="bigfish">
      <img src={image} alt="fish" />
      <h2>HOW IT WORKS</h2>
      <p>Sea Basket delivers fresh sourced seafood in a few easy clicks</p>
    </div>
  );
}

export default BigFish;
