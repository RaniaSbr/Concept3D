import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Twirl as Hamburger } from "hamburger-react";

function Navbar() {
  const navRef = useRef();
  const [activeSection, setActiveSection] = useState(null);
  const [isOpen, setOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = [
    { id: "", label: "Home" },
    { id: "services", label: "Services" },
    { id: "Catalogue", label: "Materieux" },
    { id: "contact", label: "Contact" },
  ];

  const sectionsRef = {
    home: useRef(null),
    services: useRef(null),
    catalogue: useRef(null),
    contact: useRef(null),
  };

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        const scrollOffset = window.scrollY + navRef.current.offsetHeight;

        for (const sectionKey in sectionsRef) {
          const section = sectionsRef[sectionKey].current;
          if (section) {
            const position = section.offsetTop;
            const height = section.offsetHeight;
            if (scrollOffset >= position && scrollOffset < position + height) {
              setActiveSection(sectionKey);
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sectionsRef]);

  return (
    <header className="h-30 flex items-center justify-between relative font-medium bg-white shadow-md">
      <a href="/" className="flex items-center">
        <img className="logoC" src="./Assets/Logo.png" alt="Logo" />
        <div className="oncept3d mb-2">
          <p className="oncept">oncept</p>
          <a href="/">
            <p className="d3">3D</p>
          </a>
        </div>
      </a>
      <nav className="hidden md:flex flex-1 justify-center">
        <ul className="flex gap-5">
          {sections.map((section) => (
            <li key={section.id}>
              <NavLink
                to={"/" + section.id}
                smooth={true}
                duration={500}
                className={activeSection === section.id ? "active" : ""}
              >
                {section.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {isOpen && isMenuOpen && (
        <div className="fixed top-0 right-0 md:hidden w-screen h-screen bg-white/80 z-50">
          <ul className="grid mt-20 gap-5 font-bold h-3/4 w-full justify-items-center rounded-b-3xl content-center bg-white/80 shadow-xl backdrop-blur-md">
            {sections.map((section) => (
              <li key={section.id}>
                <NavLink
                  to={section.id}
                  onClick={() => setOpen(false)}
                  smooth={true}
                  duration={500}
                >
                  {section.label}
                </NavLink>
              </li>
            ))}
            <NavLink to="/Devis" className="dev-btn">
              {"Obtenir un devis "}
            </NavLink>
          </ul>
        </div>
      )}
      <NavLink to="/Devis" className="devis-btn hidden md:block">
        {"Obtenir un devis "}
      </NavLink>
      <div className="md:hidden" style={{ zIndex: 1000 }}>
        <Hamburger
          toggled={isOpen}
          toggle={setOpen}
          onToggle={(toggled) => {
            setIsMenuOpen(toggled);
          }}
          color="grey"
        />
      </div>
    </header>
  );
}

export default Navbar;
