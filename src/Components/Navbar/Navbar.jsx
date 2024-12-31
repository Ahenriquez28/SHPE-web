import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
import shpelead from './leading.webp';

const Navbar = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={shpelead} alt="Logo" className="logo"/>
        <div className="logo-text">
          <p>Georgia State</p>
          <p>University</p>
        </div>
      </div>

      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/sponsors">Sponsors</Link></li>
          <li><Link to="/join">Join</Link></li>
          <li><Link to="/EBoard">EBoard</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
