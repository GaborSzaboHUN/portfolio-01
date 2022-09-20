import React, { useState } from "react";
import "./PortfolioElements.css";

function PortfolioElements() {
  const [isVisible, setVisible] = useState(false);
  const [isBtnProjectVisible, setBtnProjectVisible] = useState(false);
  const [isBtnGitVisible, setBtnGitVisible] = useState(false);
  const [isLeft, setLeft] = useState(false);

  const visibleHandler = () => {
    setVisible(!isVisible);
    setLeft(!isLeft);
  };

  const btnProjectVisibleHandler = () => {
    setBtnProjectVisible(true);
  };

  const btnProjectVisibleHandlerOff = () => {
    setBtnProjectVisible(!isBtnProjectVisible);
  };
  const btnGitVisibleHandler = () => {
    setBtnGitVisible(true);
  };

  const btnGitVisibleHandlerOff = () => {
    setBtnGitVisible(!isBtnGitVisible);
  };

  /* 
TODOs:
- set up "isLeft"
*/

  return (
    <div className="project-container">
      <div
        onClick={visibleHandler}
        className={isLeft ? "project-preview left-top" : "project-preview"}
      ></div>

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
          <a
            onMouseOver={btnProjectVisibleHandler}
            onMouseLeave={btnProjectVisibleHandlerOff}
            href="http://www.google.hu"
            target="_blank"
            rel="noreferrer"
          >
            <i
              className={
                isBtnProjectVisible
                  ? "fa-solid fa-turn-down"
                  : "fa-solid fa-turn-down hidden"
              }
            ></i>
            Go to the project
          </a>

          <a
            onMouseOver={btnGitVisibleHandler}
            onMouseLeave={btnGitVisibleHandlerOff}
            href="http://www.google.hu"
            target="_blank"
            rel="noreferrer"
          >
            <i
              className={
                isBtnGitVisible
                  ? "fa-brands fa-github"
                  : "fa-brands fa-github hidden"
              }
            ></i>
            Check the code
          </a>
        </div>
      </div>
    </div>
  );
}

export default PortfolioElements;
