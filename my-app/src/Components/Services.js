import React from "react";
import Propos from "./A_propos";
import "../Styles/main.css"; // Import CSS file for styling
import Service from "./Service";

function Services(params) {
  return (
    <div className="bg-whitie grid justify-items-center content-center  ">
      <Propos texte="Nos services" couleur="white"></Propos>
      <div className=" grid justify-items-center content-center gap-4  py-12 ">
        <div className="md:flex grid gap-4">
          <Service
            title="Prototypage"
            text="Nous offrons des services de conception et de fabrication de prototypes pour tester et valider vos concepts avant la production à grande échelle."
            imageUrl="./Assets/engre_srvc.png"
          />
          <Service
            title="Prothèse sur mesure"
            text=" Nous proposons des prothèses sur mesure conçues avec précision
              pour offrir un ajustement parfait et améliorer la qualité de vie
              de nos clients."
            imageUrl="./Assets/prosthesis.png"
          />
        </div>
        <div className="md:flex grid gap-4">
          {" "}
          <Service
            title="Réalisation d'objets sur mesure"
            text="Notre équipe expérimentée peut concevoir et fabriquer des objets
              sur mesure pour répondre à vos exigences exactes, que ce soit pour
              des pièces de machines ou d'autres
              projets spéciaux."
            imageUrl="./Assets/cube.png"
          />
          <Service
            title="Maquette"
            text=" Pour visualiser vos idées et concepts, notre service de maquettage
              peut créer des représentations physiques ou numériques de haute
              qualité qui vous aideront à visualiser vos projets."
            imageUrl="./Assets/cubes.png"
          />
        </div>
      </div>
    </div>
  );
}
export default Services;
