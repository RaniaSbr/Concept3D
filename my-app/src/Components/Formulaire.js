import React, { useState } from "react";
import "../Styles/Formulaire.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";

function Devis() {
  const [Nom, setNom] = useState("");
  const [Prenom, setPrenom] = useState("");
  const [Mail, setMail] = useState("");
  const [Phone, setPhone] = useState("+213 ");
  const [Fichier, setFichier] = useState(null);
  const [Materiel, setMateriel] = useState("");
  const [Msg, setMsg] = useState("PAS DE MENTION");

  const handleNomChange = (e) => {
    setNom(e.target.value);
  };
  const handlePrenomChange = (e) => {
    setPrenom(e.target.value);
  };
  const handleMailChange = (e) => {
    setMail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleMsgChange = (e) => {
    setMsg(e.target.value);
  };

  const handleFichierChange = (e) => {
    setFichier(e.target.files[0]);
  };

  const handleMaterielChange = (e) => {
    setMateriel(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("Nome", Nom);
    formData.append("Prenom", Prenom);
    formData.append("Mail", Mail);
    formData.append("Phone", Phone);
    formData.append("Fichier", Fichier);
    formData.append("Materiel", Materiel);
    formData.append("Msg", Msg);

    try {
      // Make a POST request using Axios
      const response = await axios.post(
        "http://localhost:5000/mail",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Handle the response as needed
      console.log("Server Response:", response.data);
    } catch (error) {
      // Handle errors
      console.error("Error:", error);
    }
    console.log(formData);
  };

  return (
    <div className="conteneur">
      <img src="./Assets/Wave2 - Copie.png" alt="" className="background" />
      {/* <p className="p1"> Obtenir un devis</p> */}
      <p className="p2">
        Remplissez le formulaire ci-dessous avec les détails de votre projet
        pour recevoir un devis personnalisé.
      </p>
      <form className="formulaire" onSubmit={handleSubmit}>
        <div className="nom">
          <label htmlFor="nom" id>
            Nom :
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            placeholder="Saisissez votre nom"
            value={Nom}
            onChange={handleNomChange}
            required
          />
        </div>

        <div className="prenom">
          <label htmlFor="prenom">Prenom :</label>
          <input
            type="text"
            id="Prenom"
            name="Prenom"
            placeholder="Saisissez votre prenom"
            value={Prenom}
            onChange={handlePrenomChange}
            required
          />
        </div>

        <div className="email">
          {" "}
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            placeholder="Saisissez votre mail"
            name="Mail"
            value={Mail}
            onChange={handleMailChange}
            required
          />
        </div>

        <div className="tel">
          <label htmlFor="email">Telephone :</label>
          <input
            type="phone"
            id="phone"
            name="phone"
            value={Phone}
            onChange={handlePhoneChange}
          />
        </div>

        <div className="fichier">
          <label htmlFor="fichier">
            <p className="charger-maquette">CHARGEZ UNE MAQUETTE :</p>
            <span className="fichier-span">
              <FontAwesomeIcon
                icon={faCloudUploadAlt}
                className="upload-icon"
              />
              Choisir un fichier
            </span>
            <input
              className=""
              type="file"
              id="fichier"
              name="fichier"
              onChange={handleFichierChange}
              accept=".3DM (Rhino), .3DS (3D Studio), .3MF, .AC3D, .ASE (3D Studio), .CATPART, .CATPRODUCT, .CGR (CATIA), .COB (TrueSpace), .DAE (Collada), .DXF / .DXF4 (AutoCAD), .IAM / .IPT (Autodesk Inventor), .JT, .IGES / .IGS, .KMZ (Google Earth), .LWO (LightWave), .MD2 / MD3 (Quake), .OFF, .PDF, .PLY (Stanford), .PRC, .PRT, .Q3O (Quick3D), .RAR, .SAT, .SCAD (OpenSCAD), .SKP (Sketchup), .SLDPRT, .SLDASM (SolidWorks), .STEP (ISO 10303), .TGZ, .U3D, .VRML, .X_T (Parasolid), .ZIP"
            />
          </label>
        </div>
        <div className="liste">
          {" "}
          <label htmlFor="Materiel">Materiel:</label>
          <select
            name="Materiel"
            onChange={handleMaterielChange}
            value={Materiel}
          >
            <option value="PLA">PLA</option>
            <option value="PRO1">PRO1</option>
            <option value="PLA N">PLA N</option>
            <option value="PETG">PETG</option>
            <option value="NYLON">NYLON</option>
            <option value="FLEXFIL">FLEXFIL</option>
            <option value="FLEX 45">FLEX 45</option>
            <option value="FLEX 60">FLEX 60</option>
            <option value="PVA +">PVA +</option>
            <option value="HIPS">HIPS</option>
            <option value="FILAMENT CHARGE BOIS">FILAMENT CHARGE BOIS</option>
            <option value="FILAMENT CHARGE LIEGE">FILAMENT CHARGE LIEGE</option>
            <option value="FILAMENT CHARGE CUIVRE">
              FILAMENT CHARGE CUIVRE
            </option>
            <option value="FILAMENT CHARGE BRONZE">
              FILAMENT CHARGE BRONZE
            </option>
            <option value="FILAMENT CHARGE EN CARBONNE">
              FILAMENT CHARGE EN CARBONNE
            </option>
            <option value="FILAMENT ARAMIDE KEVLAR">
              FILAMENT ARAMIDE KEVLAR
            </option>
            <option value="FILAMENT FIBRE DE VERRE 15%">
              FILAMENT FIBRE DE VERRE 15%
            </option>
            <option value="FILAMENT FIBRE DE VERRE 30%">
              FILAMENT FIBRE DE VERRE 30%
            </option>
          </select>
        </div>
        <div className="msg">
          {" "}
          <label htmlFor="message">Message :</label>
          <textarea
            id="message"
            name="Msg"
            value={Msg}
            onChange={handleMsgChange}
            rows="4"
          />
        </div>
        <div className="bouton">
          <button type="submit" className="send">
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
}
export default Devis;
