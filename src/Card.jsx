import { ellipse } from "framer-motion/client";
import "./cards.css";
import { warning } from "framer-motion";
import { useEffect, useState } from "react";


function Card({ info, description, icon_path, font_size, num }) {
 
  if (font_size == undefined) {
    font_size = "2em";
  }

  let el = document.getElementsByClassName("copy-contacts-img") 
  const [SRC, setSRC] = useState("./copy.svg")

  useEffect(() => {
    el.src=SRC;

  });

  function ImgclipboardHandler(){
    navigator.clipboard.writeText(info); 
    setSRC("./check.svg");
    setTimeout(function () {
      setSRC("./copy.svg");
    }.bind(this), 1500);
  }     

  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img className="contact-icon" src={icon_path} alt="" />
        </div>
        <div className="flip-card-back" >
          <p>{description}</p>
          <h1 style={{ fontSize: font_size}}>{info}</h1>
          <img className="copy-contacts-img" src={SRC} onClick={ImgclipboardHandler}></img>
        </div>
      </div>
    </div>
  );
}

export default Card;
