import react from "react";
import "../Styles/Footer.css";
import { NavLink } from "react-router-dom";

function Footer(params) {
  const handleEmailClick = () => {
    const email = "nyara877@gmail.com";

    const mailtoLink = `mailto:${email}`;

    window.open(mailtoLink, "_blank");
  };
  const handlePhoneClick = () => {
    const phoneNumber = "+123556442362";
    const telLink = `tel:${phoneNumber}`;
    window.open(telLink, "_blank");
  };

  return (
    <div className="footer relative">
      <div className="up-foot">
        <a href="/" className="logo logo-foot">
          <img className="logoC" src=".\Assets\Logo.png" alt="" />
          <div className="oncept3d">
            <p className="oncept">oncept</p>
            <a href="/">
              <p className="d3">3D</p>
            </a>
          </div>
        </a>
        <div className="contact-foot">
          <div className="emplacement">
            <p className="titre-foot">Emplacement :</p>
            <a href="" onClick={handleEmailClick}>
              Hai El Yamine,Oran.
            </a>
          </div>

          <div className="num">
            <p className="titre-foot">Numéro de téléphone :</p>
            <a href="" onClick={handlePhoneClick}>
              0556443262
            </a>
          </div>

          <div className="mail">
            <p className="titre-foot">Email :</p>

            <a href="" onClick={handleEmailClick}>
              concept3d@gmail.com
            </a>
          </div>
        </div>
        <div className="menu menu-foot">
          <p className="titre-foot">Menu:</p>{" "}
          <ul className=" menu-list">
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
        </div>
        <div className="socialmedia-foot">
          <p className="titre-foot">Contactez nous:</p>
          <div className="socialmedia">
            <a href="">
              {" "}
              <img src=".\Assets\fb.png" alt="" />
            </a>
            <a href="">
              {" "}
              <img src=".\Assets\linkedin.png" alt="" />
            </a>
            <a href="">
              {" "}
              <img src=".\Assets\instagram.png" alt="" />
            </a>
            <a href="">
              {" "}
              <img src=".\Assets\twitter.png" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="parent-hr">
        {" "}
        <hr />
      </div>
      <div className="down-foot">
        <div className="info">
          {" "}
          <NavLink>Politique de confidentialité</NavLink>
          <NavLink>Politique de cookies </NavLink>
          <NavLink>Mentions légales</NavLink>
        </div>
        <div className="droits">
          <p>© 2009-2023 Sculpteo - Tous droits réservés.</p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
