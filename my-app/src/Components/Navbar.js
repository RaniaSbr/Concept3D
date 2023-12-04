import React from "react";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";

function Navbar(params) {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <div>
      <p>cc</p>
      <header className="navbar active">
        <a href="/" className="logo">
          <img className="logoC" src=".\Assets\Logo.png" alt="" />
          <div className="oncept3d">
            <p>oncept</p>
            <p className="d3">3D</p>
          </div>
        </a>

        <nav className="nav-right" ref={navRef}>
          {" "}
          <ul className="nav-right-a">
            <li> </li>
            <li>
              <a href="/#">Services</a>
            </li>
            <li>
              <a href="/#">Materiaux</a>
            </li>
            <li>
              <a href="/#">Contact</a>
            </li>
            <li>
              {" "}
              <a href="/#">FAQ</a>
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
