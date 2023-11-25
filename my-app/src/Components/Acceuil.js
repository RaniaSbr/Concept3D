import React from "react";
import Cube from "./Cube";
import Devis from "./Devis.js";
import Materiaux from "./Materiaux.js";
import { BrowserRouter as Router , Route , Routes } from "react-router-dom";
import "../Styles/Acceuil.css"; // Importe main.css depuis le bon chemin
function Acceuil(params) {
  return (
    <div className="acceuil">
      <div className="acceuil-left">
        <p className="transf">Transformez vos concepts en réalité !</p>
        <p className="resume">
          Concept 3D propose une imprimante 3D polyvalente avec des options
          d'extrusion avancées pour des impressions rapides et la possibilité
          d'intégrer divers composants électroniques.
        </p>
      </div>
      <div className="acceuil-right">
        <Cube></Cube>
      </div>
      <div className="btns">
        <Devis></Devis>
        <Materiaux></Materiaux>
      </div>
    </div>
  );
}

export default Acceuil;
