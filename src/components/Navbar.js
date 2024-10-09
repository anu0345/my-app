import React from 'react';
import '../css/Navbar.css'; // Import CSS for Navbar

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#ContactForm">ContactForm</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
