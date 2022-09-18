import React from "react";
import logo from "../assets/GS-logo.svg";
import "./Main.css";
import { NavLink } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Main() {
  return (
    <>
      <div className="main-container">
        <div className="main-blue-light-container">
          <div className="main-blue-light"></div>
        </div>
        <header>
          <div className="logo">
            <img src={logo} alt="logo" />
            <div className="dash"></div>
          </div>

          <nav className="nav-bar">
            <a className="nav-link" href="#">
              home
            </a>
            <a className="nav-link" href="#">
              portfolio
            </a>
            <a className="nav-link" href="#">
              about
            </a>
            <a className="nav-link" href="#">
              skills
            </a>
            <a className="nav-link" href="#">
              contact
            </a>
          </nav>
        </header>

        <div className="main-title">
          <h1 className="front-title">Gábor Szabó</h1>
          <h1 className="back-title">GÁBOR SZABÓ</h1>
        </div>
        <div className="bottom-section">
          <p className="time">11:23</p>
          <i className="fa-solid fa-angle-down"></i>
        </div>
      </div>
    </>
  );
}

export default Main;
