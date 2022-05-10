import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import "./HaveARead.css";

function Read({ heading, content }) {
  return (
    <div className="read">
      <div className="heading">{heading}</div>
      <div className="content">{content}</div>
      <a className="readmore" href="#readmore">
        READ MORE
        <AiOutlineRight className="rightarrow"/>
      </a>
    </div>
  );
}

export default Read;
