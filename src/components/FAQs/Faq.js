import React, { useEffect, useRef, useState } from "react";
import "./Faq.css";
import {AiOutlineRight} from "react-icons/ai";

function Faq({ ques, ans }) {
  const [active, setActive] = useState(false);

  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);

  const toggleAccordion = () => {
    setActive(!active);
  };

  return (
    <div className="faq">
      <div>
        <button
          className={`question-section ${active}`}
          onClick={toggleAccordion}
        >
          <div>
            <div className="question-align">
              <h4 className="question">{ques}</h4>
              <AiOutlineRight
                className={active ? `question-icon rotate` : `question-icon`}
              />
            </div>
            <div
              ref={contentRef}
              className={active ? `answer answer-divider` : `answer`}
            >
              <p>{ans}</p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default Faq;
