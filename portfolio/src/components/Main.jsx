import React from "react";

function Main() {
  return (
    <>
      <div className="main-container">
        <div className="main-blue-light"></div>
        <nav className="navigation-bar">
          <div className="logo">
            <img src="" alt="" />
            <div className="dash"></div>
          </div>

          <div className="nav-items">
            <a className="nav-links" href="#">
              home
            </a>
            <a className="nav-links" href="#">
              portfolio
            </a>
            <a className="nav-links" href="#">
              about
            </a>
            <a className="nav-links" href="#">
              skills
            </a>
            <a className="nav-links" href="#">
              contact
            </a>
          </div>
        </nav>

        <div className="main-title">
          <h1 className="front-title">Gábor Szabó</h1>
          <h1 className="back-title">Gábor Szabó</h1>
        </div>

        <p className="time">11:23</p>
        <i className="fa-solid fa-angle-down"></i>
      </div>
    </>
  );
}

export default Main;
