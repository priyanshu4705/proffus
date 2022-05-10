import React from "react";
import Faq from "./Faq";
import "./Faq.css";

function Faqs({ faqs }) {

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
