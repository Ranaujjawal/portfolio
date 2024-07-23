import React, { useState } from 'react';
import './css/navbar.css';
import Logo from './svgicons/Logo3.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
      <a href="#" className="navbar-logo">
       <img src={Logo} alt="My Portfolio Logo" className="logo-image" />
      </a>

        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item"><a href="#hero" className="nav-link" onClick={closeMenu}>Home</a></li>
          <li className="nav-item"><a href="#projects" className="nav-link" onClick={closeMenu}>Projects</a></li>
          <li className="nav-item"><a href="#skills" className="nav-link" onClick={closeMenu}>Skills</a></li>
          <li className="nav-item"><a href="#contact" className="nav-link" onClick={closeMenu}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
