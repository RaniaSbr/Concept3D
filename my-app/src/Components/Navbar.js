import React, { useEffect, useRef, useState } from "react";
import "../Styles/main.css";
import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { useNavigate } from "react-router-dom";
import { Twirl as Hamburger } from "hamburger-react";
function Navbar() {
  const navRef = useRef();
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = [
    { id: "home", label: "Home" },
    { id: "services", label: "Services" },
    { id: "materiaux", label: "Materieux" },
    { id: "contact", label: "Contact" },
    { id: "faq", label: "FAQ" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollOffset = window.scrollY;
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const position = element.offsetTop;
          if (scrollOffset >= position) {
            setActiveSection(section.id);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="">
      <header className="h-30 flex items-center justify-spacebetween font-medium bg-white shadow-md">
        <a href="/" className="flex items-center">
          <img className="logoC" src=".\Assets\Logo.png" alt="" />
          <div className="oncept3d mb-2">
            <p className="oncept">oncept</p>
            <a href="/">
              <p className="d3">3D</p>
            </a>
          </div>
        </a>
        <nav className="flex" ref={navRef}>
          <ul className="flex gap-5">
            {sections.map((section) => (
              <li key={section.id} className="cursor-pointer">
                <ScrollLink
                  to={section.id}
                  smooth={true}
                  duration={500}
                  className={`${activeSection === section.id ? "active" : ""}`}
                >
                  {section.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className="fixed md:hidden z-50 right-6">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            onToggle={(toggled) => {
              setIsMenuOpen(toggled);
            }}
            color="grey"
          />
        </div>
        {isOpen && isMenuOpen && (
          <div
            className="h-screen fixed z-0 right-0 w-screen menu-transition"
            style={{ transform: "translateY(0)" }}
          >
            <ul className="grid mt-[334px] gap-5 font-bold h-3/4 w-[100] justify-items-center rounded-b-3xl content-center bg-white/80 shadow-xl backdrop-blur-md">
              {sections.map((section) => (
                <li key={section.id} className="cursor-pointer">
                  <ScrollLink
                    to={section.id}
                    onClick={() => setOpen(false)}
                    smooth={true}
                    duration={500}
                  >
                    {section.label}
                  </ScrollLink>
                </li>
              ))}
              <NavLink to="/Devis" className="dev-btn">
                {"Obtenir un devis "}
              </NavLink>
            </ul>
          </div>
        )}

        <NavLink to="/Devis" className="devis-btn">
          {"Obtenir un devis "}
        </NavLink>
      </header>
    </div>
  );
}

export default Navbar;
