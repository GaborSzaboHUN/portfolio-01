import React, { useState } from "react";
import "./BtnSend.css";

function BtnSend() {
  const [isVisible, setVisible] = useState(false);

  const buttonOnHandler = () => {
    setVisible(!isVisible);
  };

  const buttonOffHandler = () => {
    setVisible(!isVisible);
  };

  return (
    <button
      onMouseEnter={buttonOnHandler}
      onMouseOut={buttonOffHandler}
      id="btn-contact"
    >
      <i
        className={
          isVisible ? "fa-regular fa-envelope" : "fa-regular fa-envelope hidden"
        }
      ></i>{" "}
      Send the message
    </button>
  );
}

export default BtnSend;
