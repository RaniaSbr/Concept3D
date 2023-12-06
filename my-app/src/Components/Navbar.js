import React, { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div>
      <p>cc</p>
      <header className="navbar activee">
        <a href="/" className="logo">
          <img className="logoC" src=".\Assets\Logo.png" alt="" />
          <div className="oncept3d">
            <p>oncept</p>
            <p className="d3">3D</p>
          </div>
        </a>

        <nav className="nav-right" ref={navRef}>
          <ul className="nav-right-a">
            <li> </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/Catalogue">Materiaux</NavLink>
            </li>
            <li>
              <NavLink to="/Contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/FAQ">FAQ</NavLink>
            </li>
          </ul>
          <button className="devis-btn">{"Obtenir un devis "}</button>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </div>
  );
}

export default Navbar;
