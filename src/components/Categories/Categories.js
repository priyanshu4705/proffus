import React from "react";
import Category from "./Category";
import fish1 from "../../assets/images/fish1.png";
import fish2 from "../../assets/images/fish2.png";
import fish3 from "../../assets/images/fish3.png";
import glanceimg from "../../assets/images/glance.png";

function Categories() {
  const categories = [
    {
      title: "FISH",
      image: fish1,
    },
    {
      title: "CRUSTACEANS",
      image: fish2,
    },
    {
      title: "EXOTIC",
      image: fish3,
    },
  ];

  return (
    <div className="cat">
      <div className="header">CATEGORIES</div>
      <div className="categoryies">
        {categories.map((category, index) => (
          <Category key={index} title={category.title} image={category.image} />
        ))}
      </div>
      <div className="glance">
        <h3>A GLANCE AT OUR PRODUCTS</h3>
        <img src={glanceimg} alt="glance" />
      </div>
    </div>
  );
}

export default Categories;
