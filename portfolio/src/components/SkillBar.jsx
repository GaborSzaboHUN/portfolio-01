import React from "react";
import { useState } from "react";
import "./SkillBar.css";

function SkillBar({ percentage, program }) {
  return (
    <div className="bar-and-skill-container">
      <div className="bar-container">
        <div className="baseline"></div>
        <div className="skill-percent" style={percentage}></div>
      </div>
      <p className="skill-name">{program}</p>
    </div>
  );
}

export default SkillBar;
