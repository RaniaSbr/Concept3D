import React from "react";
import "../Styles/Pop-up.css";

export default function Model() {
  return (
    <>
      <div className="overlay">
        <div className="modal">
          <div className="txt">
            <h3 className="titre"> DEVIS ENVOYE</h3>
            <br></br>
            <p className="content">
              Votre devis a été envoyé avec succés , notre équipe va vous
              répondre dans le plus proche des delais . <br></br>
              <strong> Cliquez pour revenir a l'Acceuil .</strong>
            </p>
            <br></br>
            <a href="/">
              <button className="redirect"> ACCUEIL</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
