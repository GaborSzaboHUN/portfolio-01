import React, { useState } from "react";
import "./Portfolio.css";
import PortfolioElements from "./PortfolioElements";

function Portfolio() {
  return (
    <>
      <div className="right-blue-light-container">
        <div className="right-blue-light"></div>
      </div>
      <div className="portfolio-title">
        <h1 className="front-title">Portfolio</h1>
        <h1 className="back-title">PORTFOLIO</h1>
      </div>

      <div className="portfolio-container">
        <PortfolioElements />
        <PortfolioElements />
        <PortfolioElements />
        <PortfolioElements />
        <PortfolioElements />
        <PortfolioElements />
        <PortfolioElements />
        <PortfolioElements />
        <PortfolioElements />
      </div>
    </>
  );
}

export default Portfolio;