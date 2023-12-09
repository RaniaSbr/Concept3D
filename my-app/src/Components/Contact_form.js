import React, { useState } from "react";
import "../Styles/Formulaire.css";
import Model from "../Components/model";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudUploadAlt } from "@fortawesome/free-solid-svg-icons";
import icone from "../icone/papier.png";

function Contact_form() {
  const [Nom, setNom] = useState("");
  const [Prenom, setPrenom] = useState("");
  const [Mail, setMail] = useState("");
  const [Phone, setPhone] = useState("+213 ");
  const [Fichier, setFichier] = useState(null);
  const [Materiel, setMateriel] = useState("");
  const [Msg, setMsg] = useState("PAS DE MENTION");
  const [Modal, setModal] = useState(false);

  function modelOn() {
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

    formData.append("Msg", Msg);

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
    <div className="conteneur contact">
      <p className="p2">
        <br></br>
        Remplissez le formulaire ci-dessous pour nous contacter.
      </p>
      <form className="formulaire contact-form" onSubmit={handleSubmit}>
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
      {Modal && <Model></Model>}
    </div>
  );
}
export default Contact_form;
