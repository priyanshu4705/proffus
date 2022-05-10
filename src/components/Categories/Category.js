import React from "react";
import "./category.css"

function Category({ title, image }) {
  return (
    <div className="category">
      <img src={image} alt={title} />
      <div className="title">{title}</div>
    </div>
  );
}

export default Category;
