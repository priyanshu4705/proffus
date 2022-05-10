import React from "react";
import Read from "./Read";
import "./HaveARead.css";

function HaveARead() {
  const reads = [
    {
      heading: "The right quality",
      content:
        "Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus nisl adipiscing posuere et a. Tincidunt consectetur sapien pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit massa felis, et. Cursus tortor ut fames sapien a vulputate amet malesuada.",
    },
    {
      heading: "The right time",
      content:
        "Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus nisl adipiscing posuere et a. Tincidunt consectetur sapien pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit massa felis, et. Cursus tortor ut fames sapien a vulputate amet malesuada.",
    },
    {
      heading: "The basis of a balanced diet",
      content:
        "Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus nisl adipiscing posuere et a. Tincidunt consectetur sapien pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit massa felis, et. Cursus tortor ut fames sapien a vulputate amet malesuada.",
    },
  ];

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
