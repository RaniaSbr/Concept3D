import React from "react";
import Cube from "./Cube";
import Devis from "./Devis.js";

import Materiaux from "./Materiaux.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function Acceuil(params) {
  return (
    <div className="  py-16 px-10 grid gap-10 h-[100vh] justify-items-start content-center ">
      <div className="grid justify-items-center content-center">
        <div className=" flex  items-center  content-center">
          <div className="md:w-3/5 gap-10 grid">
            <p className="  md:text-4xl text-3xl">
              Transformez vos concepts en réalité!
            </p>
            <p className="md:w-4/5 font-normal">
              <span className="font-bold text-bleu">Concept 3D</span> propose
              une imprimante 3D polyvalente avec des options d'extrusion
              avancées pour des impressions rapides et la possibilité d'intégrer
              divers composants électroniques.
            </p>
          </div>
          <div className="hidden w-2/4 h-full md:flex items-end justify-center ">
            <Cube></Cube>
          </div>
        </div>
      </div>

      <div className="flex gap-6  ">
        <Devis></Devis>
        <Materiaux></Materiaux>
      </div>
    </div>
  );
}

export default Acceuil;
