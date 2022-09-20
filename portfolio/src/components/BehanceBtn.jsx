import React, { useState } from "react";
import "./BehanceBtn.css";

function BehanceBtn() {
  const [isText, setText] = useState(false);
  const [isVisible, setVisible] = useState(false);

  const buttonOnHandler = () => {
    setText(true);
    setVisible(!isVisible);
  };

  const buttonOffHandler = () => {
    setText(!isText);
    setVisible(!isVisible);
  };

  return (
    <div className="behance-container">
      <div className="line"></div>
      <div className="behance-btn">
        <i
          className={
            isVisible
              ? "fa-brands fa-square-behance"
              : "fa-brands fa-square-behance hidden"
          }
        ></i>
        <a
          onMouseEnter={buttonOnHandler}
          onMouseOut={buttonOffHandler}
          href="https://www.behance.net/szabogaborHUN"
          target="_blank"
          rel="noreferrer"
        >
          {isText ? "Let’s check Behance portfolio" : "Behance portfolio"}
        </a>
        <i
          className={
            isVisible ? "fa-brands fa-behance hidden" : "fa-brands fa-behance"
          }
        ></i>
      </div>
    </div>
  );
}

export default BehanceBtn;
