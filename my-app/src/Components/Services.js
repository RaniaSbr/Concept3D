import React from "react";
import Propos from "./A_propos";
import "../Styles/main.css"; // Import CSS file for styling

function Services(params) {
  return (
    <div className="bg-whitie h-screen grid justify-items-center gap-20 content-start">
      <Propos texte="Nos services" couleur="white"></Propos>
      <div className="grid grid-cols-2 justify-items-center  content-center  w-[100vw]">
        <div className="moving-image-container gap-3 flex ">
          <img
            src="./Assets/engre_srvc.png"
            alt=""
            className="moving-image h-14"
          />
          <div className="grid">
            <p>Prototypage</p>
            <p className=" font-light text-sm w-full">
              Nous offrons des services de conception et de fabrication de
              prototypes pour tester et valider vos concepts avant la production
              à grande échelle.
            </p>
          </div>
        </div>
        <div className="moving-image-container gap-3 flex ">
          <img
            src="./Assets/prosthesis.png"
            alt=""
            className="moving-image h-14"
          />
          <div className="grid">
            {" "}
            <p>Prothèse sur mesure</p>
            <p className=" font-light text-sm ">
              Nous proposons des prothèses sur mesure conçues avec précision
              pour offrir un ajustement parfait et améliorer la qualité de vie
              de nos clients.
            </p>
          </div>{" "}
        </div>{" "}
        <div className="moving-image-container gap-3 flex  ">
          <img src="./Assets/cube.png" alt="" className="moving-image h-12" />
          <div className="grid">
            <p>Réalisation d'objets sur mesure</p>
            <p className=" font-light text-sm ">
              Notre équipe expérimentée peut concevoir et fabriquer des objets
              sur mesure pour répondre à vos exigences exactes, que ce soit pour
              des pièces de machines, des meubles personnalisés ou d'autres
              projets spéciaux.
            </p>
          </div>
        </div>
        <div className="moving-image-container gap-3 flex ">
          <img src="./Assets/cubes.png" alt="" className="moving-image h-14" />
          <div className="grid">
            <p>Maquette</p>
            <p className=" font-light text-sm  ">
              Pour visualiser vos idées et concepts, notre service de maquettage
              peut créer des représentations physiques ou numériques de haute
              qualité qui vous aideront à visualiser vos projets de manière
              claire et réaliste.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Services;
