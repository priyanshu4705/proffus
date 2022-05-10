import React from "react";
import Topic from "./Topic";
import img1 from "../../assets/images/topic1img.png";
import img2 from "../../assets/images/topic2img.png";
import "./Topics.css";

function Topics() {
  const topics = [
    {
      header: "TOPICS YOU CAN'T MISS",
      content:
        "Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus nisl adipiscing posuere et a. Tincidunt consectetur sapien pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit massa felis, et. Cursus tortor ut fames sapien a vulputate amet malesuada.",
      image: img1,
    },
    {
      header: "HOW TO CLEAN/CUT YOUR SEAFOOD",
      content:
        "Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus nisl adipiscing posuere et a. Tincidunt consectetur sapien pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit massa felis, et. Cursus tortor ut fames sapien a vulputate amet malesuada.",
      image: img2,
    },
  ];
  return (
    <div>
      <div className="har-header">TOPICS YOU CAN'T MISS</div>
      <br />
      <div className="topics">
        {topics.map((topic, index) => (
          <Topic
            key="index"
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
