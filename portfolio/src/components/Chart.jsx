import React from "react";
import "./Chart.css";

function Chart({ chartPercentage, technology }) {
  return (
    <div className="chart-container">
      <div className="chart-baseline"></div>
      <div className="chart-percentage" style={chartPercentage}></div>
      <i className={technology}></i>
      {/*       <i class="fa-brands fa-html5 circle-chart"></i>
       */}{" "}
    </div>
  );
}

export default Chart;
