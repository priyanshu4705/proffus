import React from "react";
import Faq from "./Faq";
import "./Faq.css";

function Faqs() {
  const faqs = [
    {
      ques: "Velit venenatis pretium mattis consectetur massa pretium mattis ?",
      ans: "Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus nisl adipiscing posuere et a. Tincidunt consectetur sapien pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit massa felis, et. Cursus tortor ut fames sapien a vulputate amet malesuada.",
    },
    {
      ques: "Velit venenatis pretium mattis consectetur massa pretium mattis ?",
      ans: "Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus nisl adipiscing posuere et a. Tincidunt consectetur sapien pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit massa felis, et. Cursus tortor ut fames sapien a vulputate amet malesuada.",
    },
    {
      ques: "Velit venenatis pretium mattis consectetur massa pretium mattis ?",
      ans: "Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus nisl adipiscing posuere et a. Tincidunt consectetur sapien pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit massa felis, et. Cursus tortor ut fames sapien a vulputate amet malesuada.",
    },
  ];

  return (
    <>
      <div className="faqs">
        <br />
        <div className="faqs-header">FAQ</div>
        <div className="dropdowns">
          {faqs.map((faq, index) => (
            <Faq key={index} ques={faq.ques} ans={faq.ans} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Faqs;
