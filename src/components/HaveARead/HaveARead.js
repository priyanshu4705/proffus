import React from "react";
import Read from "./Read";
import "./HaveARead.css";

function HaveARead({ reads }) {
  return (
    <div>
      <div className="har-header">Have A Read</div>
      <br />
      <div className="reads">
        {reads.map((read, index) => (
          <Read key={index} heading={read.heading} content={read.content} />
        ))}
      </div>
    </div>
  );
}

export default HaveARead;
