import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./navbar.css";
import "../Main/index.css";
import DarkToggle from "./DarkToggle";
import Header from "./navdrawer/Header";

function NavBar() {
  const navigate = useNavigate();
  return (
    <>
      {window.screen.width>600 && <div className="navbar-container">
        <div className="navbar">
          <div className="button-collection">
            <button className="nav-button" onClick={() => navigate("/")}>Home</button>
            <button className="nav-button" onClick={() => navigate("/about")}>About</button>
            <button className="nav-button" onClick={() => navigate("/work")}>Work</button>
            <button className="nav-button" onClick={() => navigate("/contacts")}>Contacts</button>
          </div>
          <DarkToggle/>
        </div>
      </div>}
      {window.screen.width<=600 && <Header/>}
    </>
  );
}

export default NavBar;
