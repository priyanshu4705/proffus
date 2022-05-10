import React from "react";
import Topic from "./Topic";
import "./Topics.css";

function Topics({ topics }) {
  return (
    <div>
      <div className="har-header">TOPICS YOU CAN'T MISS</div>
      <br />
      <div className="topics">
        {topics.map((topic, index) => (
          <Topic
            key={index}
            heading={topic.header}
            content={topic.content}
            image={topic.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Topics;
