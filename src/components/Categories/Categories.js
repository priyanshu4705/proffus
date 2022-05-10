import React from "react";
import Category from "./Category";
import glanceimg from "../../assets/images/glance.png";

function Categories({ categories }) {
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
