import React from "react";
import "./About.css";

function About() {
  return (
    <>
      <div className="portfolio-title">
        <h1 className="front-title">About</h1>
        <h1 className="back-title">ABOUT</h1>
      </div>

      <div className="about-container">
        <div className="image-container">
          <div className="shape-wrapper">
            <div className="image-shape"></div>
          </div>
        </div>
        <div className="introduction-container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare
            lectus sit amet est placerat. Tincidunt dui ut ornare lectus. Ipsum
            consequat nisl vel pretium.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
