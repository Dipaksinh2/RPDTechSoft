import React from "react";
import "./SideBar.css";
import logo from "../../LogoImage.png";

const SideBar = () => {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <a href="/">
          <img src={logo} className="logo" alt="logo" />
        </a>
      </div>
      <nav className="topbar-nav">
        <a href="/home" className="topbar-link">
          Home
        </a>
        <a href="/about" className="topbar-link">
          About
        </a>
        <a href="/services" className="topbar-link">
          Services
        </a>
        <a href="/contact" className="topbar-link">
          Contact
        </a>
      </nav>
    </header>
  );
};

export default SideBar;
