import "./home.css";
import "../Main/scrollbar.css";
import "../Main/index.css";

import Transition from "../Main/transition";

import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";

function Home() {
  return (
    <>
      <div className="home-container">
        <h1 className="henrique"> HENRIQUE ROSA</h1>
        <h1 className="henrique2"> HENRIQUE ROSA</h1>
        <div className="main-home-container">
          <div className="home-info-container">
            <p className="home-info"> Web Developer & Software Engineer </p>
            <p className="home-message">
              <i>
                "If you have to do something, you might as well do it right."
              </i>
            </p>
          </div>
          <div className="home-logo-container">
              <a className="abbr" target="_blank" href="https://www.linkedin.com/in/henrique-rosa-a55578274/">
                <FaLinkedin  className="logo" src="./linkedin.svg" alt="LinkedIn"/>
              </a>
            
            
              <a className="abbr" target="_blank" href="https://github.com/Henrytado2002">
                <IoLogoGithub className="logo" src="./github.svg" alt="GitHub" />
              </a>
            
            
              <a className="abbr" target="_blank" href="https://www.instagram.com/henrytado02/">
                <FaInstagram className="logo" src="./instagram.svg" alt="Instagram"/>
              </a>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default Transition(Home);
