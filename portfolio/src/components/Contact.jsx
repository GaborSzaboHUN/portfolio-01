import React from "react";
import BtnSend from "./BtnSend";
import "./Contact.css";

function Contact() {
  return (
    <>
      <div className="portfolio-title">
        <h1 className="front-title">Contact</h1>
        <h1 className="back-title">CONTACT</h1>
      </div>

      <form action="">
        <div className="name-container">
          <input type="text" placeholder="Name" />
          <input
            type="email"
            placeholder="Please enter your email address"
            required
          />
        </div>

        <textarea
          name="message"
          id="message"
          rows="8"
          placeholder="Write me a message!"
        ></textarea>
        <BtnSend />
      </form>
    </>
  );
}

export default Contact;
