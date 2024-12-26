import React, { useState } from "react";
import Transition from "../Main/transition";

import "../Main/scrollbar.css";
import "./contacts.css";

// ICONS
import { FaPhoneAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { FaDiscord } from "react-icons/fa";

function Contacts() {
  const [tooltip, setTooltip] = useState({ visible: false, x: 0, y: 0 });

  function clickHandler(text, event) {
    navigator.clipboard.writeText(text).then(() => {
      // Show tooltip near the cursor
      setTooltip({
        visible: true,
        x: event.clientX,
        y: event.clientY,
      });

      // Hide tooltip after 1.5 seconds
      setTimeout(() => {
        setTooltip({ visible: false, x: 0, y: 0 });
      }, 1500);
    });
  }

  return (
    <>
      <div className="contacts-container">
        <h1 className="contacts-title">Contacts:</h1>

        <div
          onClick={(event) => clickHandler("henrique.d.rosa2002@gmail.com", event)}
          className="contact"
          id="email"
        >
          <div className="contact-text">
            <p>My email:</p>
            <h1>henrique.d.rosa2002@gmail.com</h1>
          </div>
          <div className="contact-image-container" id="email-image-container">
            <MdAlternateEmail className="contact-img" id="email-image" />
          </div>
        </div>

        <div
          onClick={(event) => clickHandler("+351 964219944", event)}
          className="contact"
          id="phone"
        >
          <div className="contact-image-container" id="phone-image-container">
            <FaPhoneAlt className="contact-img" id="phone-image" />
          </div>
          <div className="contact-text">
            <p>My phone:</p>
            <h1>+351 964219944</h1>
          </div>
        </div>

        <div
          onClick={(event) => clickHandler("Henryy._.", event)}
          className="contact"
          id="discord"
        >
          <div className="contact-text">
            <p>My discord:</p>
            <h1>Henryy._.</h1>
          </div>
          <div className="contact-image-container" id="discord-image-container">
            <FaDiscord className="contact-img" id="discord-image" />
          </div>
        </div>
      </div>

      {tooltip.visible && (
        <div
          className="tooltip"
          style={{
            top: tooltip.y,
            left: tooltip.x,
          }}
        >
          Copied!
        </div>
      )}
    </>
  );
}

export default Transition(Contacts);
