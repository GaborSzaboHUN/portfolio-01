import React from "react";
import Chart from "./Chart";
import SkillBar from "./SkillBar";
import "./Skills.css";

function Skills() {
  return (
    <>
      <div className="portfolio-title">
        <h1 className="front-title">Skills</h1>
        <h1 className="back-title">SKILLS</h1>
      </div>
      <div className="bars-container">
        {<SkillBar percentage={{ width: "70%" }} program={"Photoshop"} />}
        {<SkillBar percentage={{ width: "80%" }} program={"Illustrator"} />}
        {<SkillBar percentage={{ width: "90%" }} program={"InDesign"} />}
        {<SkillBar percentage={{ width: "65%" }} program={"Premiere Pro"} />}
        {<SkillBar percentage={{ width: "60%" }} program={"After Effects"} />}
        {<SkillBar percentage={{ width: "50%" }} program={"3ds Max"} />}
      </div>
      <div className="charts-container">
        {<Chart technology={"fa-brands fa-html5 circle-chart"} />}
        {<Chart technology={"fa-brands fa-css3-alt circle-chart"} />}
        {<Chart technology={"fa-brands fa-bootstrap circle-chart"} />}
        {<Chart technology={"fa-brands fa-js circle-chart"} />}
        {<Chart technology={"fa-brands fa-react circle-chart"} />}
      </div>
    </>
  );
}

export default Skills;
