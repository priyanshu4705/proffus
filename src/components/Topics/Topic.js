import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import "./Topics.css";
function Topic({ heading, content, image }) {
  return (
    <div className="topic">
      <div className="topic-content">
        <div className="heading">{heading}</div>
        <div className="content">{content}</div>
        <a className="readmore" href="#readmore">
          READ MORE
          <AiOutlineRight className="rightarrow" />
        </a>
          </div>
          <img src={image} alt="img" />
    </div>
  );
}

export default Topic;
