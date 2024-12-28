import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./navbar.css";
import "../Main/index.css";
import DarkToggle from "./DarkToggle";

function NavBar() {
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar">
        <div className="button-collection">
          <button className="nav-button" onClick={() => navigate("/")}>Home</button>
          <button className="nav-button" onClick={() => navigate("/about")}>About</button>
          <button className="nav-button" onClick={() => navigate("/skills")}>Work</button>
          <button className="nav-button" onClick={() => navigate("/contacts")}>Contacts</button>
        </div>
        <DarkToggle/>
          
      </div>
    </>
  );
}

export default NavBar;
