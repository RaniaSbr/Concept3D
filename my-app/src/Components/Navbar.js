import React, { useRef } from "react";
import { FaBars } from "react-icons/fa";
import "../Styles/main.css";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navRef = useRef();
  const navigate = useNavigate();

  return (
    <div>
      <p>cc</p>
      <header className="navbar activee">
        <a href="/" className="logo">
          <img className="logoC" src=".\Assets\Logo.png" alt="" />
          <div className="oncept3d">
            <p className="oncept">oncept</p>
            <a href="/">
              <p className="d3">3D</p>
            </a>
          </div>
        </a>

        <nav className="nav-right" ref={navRef}>
          <ul className="nav-right-a">
            <li> </li>
            <li>
              <div className="ff">
                {" "}
                <NavLink to="/services">Services</NavLink>
              </div>
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
          <NavLink to="/Devis" className="devis-btn">
            {"Obtenir un devis "}
          </NavLink>{" "}
        </nav>
        <button
          className="nav-btn"
          onClick={() => {
            navigate("/Devis");
          }}
        >
          <FaBars />
        </button>
      </header>
    </div>
  );
}

export default Navbar;
