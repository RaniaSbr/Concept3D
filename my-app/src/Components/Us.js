import React from "react";
import Propos from "./A_propos";
function Us(params) {
  return (
    <div className="grid h-[90vh] ">
      <Propos texte="A propos de nous" couleur="#f2f2f2"></Propos>
      <div className="grid  justify-items-center align-center h-3/4">
        <p className="font-light w-3/4 text-center">
          <strong>Concept 3D</strong>, fondée en 2023 à Oran, est une entreprise
          spécialisée dans les services d'impression 3D. Elle propose une gamme
          complète de solutions d'impression 3D professionnelles, permettant aux
          clients de concrétiser leurs idées et leurs projets de manière
          efficace et innovante.
        </p>
        <p className="font-light w-3/4 text-center">
          Grâce à son expertise dans le domaine, <strong>Concept 3D</strong>{" "}
          offre des services haut de gamme, utilisant les technologies et les
          matériaux les plus avancés disponibles sur le marché. Que ce soit pour
          la création de prototypes, de pièces fonctionnelles, ou de pièces
          industrielles, <strong>Concept 3D</strong> met à disposition des
          clients une large gamme de matériaux, allant du plastique aux métaux,
          en passant par les résines.
          <br />
        </p>
      </div>
    </div>
  );
}
export default Us;
