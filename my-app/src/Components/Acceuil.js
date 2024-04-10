import React from "react";
import Cube from "./Cube";
import Devis from "./Devis.js";

import Materiaux from "./Materiaux.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "../Styles/Acceuil.css"; // Importe main.css depuis le bon chemin
function Acceuil(params) {
  return (
    <div className=" h-screen w-screen py-16 px-10 grid gap-5">
      <div className="grid">
        <div className=" flex  items-center  content-between">
          <div className="w-3/5 gap-10 grid">
            <p className="  md:text-4xl text-3xl">
              Transformez vos concepts en réalité !
            </p>
            <p className="w-4/5">
              Concept 3D propose une imprimante 3D polyvalente avec des options
              d'extrusion avancées pour des impressions rapides et la
              possibilité d'intégrer divers composants électroniques.
            </p>
          </div>
          <div className=" w-2/4 h-full flex items-end justify-center ">
            <Cube></Cube>
          </div>
        </div>
      </div>

      <div className="btns">
        <Devis></Devis>
        <Materiaux></Materiaux>
      </div>
    </div>
  );
}

export default Acceuil;
