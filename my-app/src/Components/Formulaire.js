import React, { useState } from "react";
import "../Styles/Formulaire.css";
import Model from "../Components/model";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import icone from "./../../public/Assets/papier.png";
import Chargement from "./loading.js";

function Devis() {
  const [Nom, setNom] = useState("");
  const [Prenom, setPrenom] = useState("");
  const [Mail, setMail] = useState("");
  const [Phone, setPhone] = useState("+213 ");
  const [Fichier, setFichier] = useState(null);
  const [Materiel, setMateriel] = useState("");
  const [Msg, setMsg] = useState("PAS DE MENTION");
  const [Modal, setModal] = useState(false);
  const [Loading, setLoading] = useState(false);

  function loadingOn(){
    setLoading(true);
  }
  function modelOn() {
    setLoading(false);/*Pour La page loading*/
    setModal(!Modal); /* Pour l'affichage du pop-up*/
  }

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
    const inputValue = e.target.value;
    if (/^[+]?[123]*( )?[0-9]*$/.test(inputValue)) {
      /* verifier si cela contient que des chiffers */
      setPhone(inputValue);
    } else {
      alert("SAISIE ERONEE");
      setPhone("+213 ");
    }
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
    loadingOn();
    try {
      console.log("je suis la");
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
      modelOn();
      console.log(Modal);
    } catch (error) {
      // Handle errors
      /*console.error("Error:", error);*/
    }
  };

  return (
    <div className="conteneur">
      <img src="./Assets/Wave2.png" alt="" className="background" />
      <p className="p2">
        <br></br>
        Remplissez le formulaire ci-dessous avec les détails de votre projet
        pour recevoir un devis personnalisé.
      </p>
      <form className="formulaire" onSubmit={handleSubmit}>
        <div className="nom">
          <label htmlFor="nom">Nom :</label>
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
            type="tel"
            id="phone"
            name="phone"
            inputMode="numeric"
            maxLength={14}
            minLength={14}
            required
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
          </label>
          <br></br>
          <input
            className=""
            type="file"
            id="fichier"
            name="fichier"
            accept=".stl, .STL, .obj, .OBJ, .amf, .AMF, .3mf, .3MF, .pdf, .PDF, .jpeg, .JPEG, .jpg, .JPG, .3DS, .3ds, .SLDPRT, .sldprt, .SCAD, .scad, .BLEND, .blend, .GCODE, .gcode, .SKP, .skp, .FBX, .fbx, .RAR, .rar, .DWG, .dwg, .MTL, .mtl, .BMP, .bmp, .PNG, .png, .GIF, .gif, .pdf, .PDF"
            onChange={handleFichierChange}
            required
          />
          {Fichier && (
            <div>
              <br></br>
              <img width={60} height={60} src={icone} alt="Icône du fichier" />
              <p>{Fichier.name}</p>
            </div>
          )}
        </div>
        <div className="liste">
          {" "}
          <label htmlFor="Materiel">Materiel:</label>
          <select
            name="Materiel"
            onChange={handleMaterielChange}
            value={Materiel}
            required
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
      {Loading && <Chargement></Chargement>}
      {Modal && <Model></Model>}
      
    </div>
  );
}
export default Devis;
