import React from "react";
import BehanceBtn from "./BehanceBtn";
import "./Portfolio.css";
import PortfolioElements from "./PortfolioElements";

function Portfolio() {
  return (
    <>
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
      <BehanceBtn />
    </>
  );
}

export default Portfolio;
