import React, { useState } from "react";
import "./PortfolioElements.css";

function PortfolioElements() {
  const [isVisible, setVisible] = useState(false);
  const [isLeft, setLeft] = useState(false);

  const visibleHandler = () => {
    setVisible(!isVisible);
    setLeft(!isLeft);
  };

  /* 
TODOs:
- set up "isLeft"
*/

  return (
    <div className="project-container">
      <div onClick={visibleHandler} className="project-preview"></div>

      <div className={isVisible ? "project-details" : "project-details hidden"}>
        <div className="project-details-text">
          <h3>Project title</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis
            pellentesque id nibh tortor id aliquet lectus proin.
          </p>
        </div>
        <div className="project-details-btn-container">
          <a href="http://www.google.hu" target="_blank">
            <i class="fa-solid fa-turn-down hidden"></i>Go to the project
          </a>
          <a href="http://www.google.hu" target="_blank">
            <i class="fa-brands fa-github hidden"></i>Check the code
          </a>
        </div>
      </div>
    </div>
  );
}

export default PortfolioElements;
