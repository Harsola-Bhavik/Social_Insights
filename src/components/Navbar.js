import React from "react";
import '../styles/Navbar.css';
import logo from '../assests/logoo.webp'; // Import your logo image file

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <span className="logo-text">Post Pulse</span>
      </div>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About Us</a>
      </div>
    </nav>
  );
};

export default Navbar;
