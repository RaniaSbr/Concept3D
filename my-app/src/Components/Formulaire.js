import React , { useState } from "react";
import "../Styles/Formulaire.css"
import axios from "axios";

function Devis (){
  const [ Nom , setNom]= useState ('');
  const [ Prenom , setPrenom]= useState ('');
  const [ Mail , setMail]= useState ('');
  const [ Phone , setPhone]= useState ('+213 ');
  const [Fichier , setFichier]=useState(null);
  const [Materiel , setMateriel] = useState('');
  const [Msg  ,setMsg]= useState('PAS DE MENTION');


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

  const handleFichierChange = (e)=>{
    setFichier(e.target.files[0]);
  }

  const handleMaterielChange = (e)=>{
    setMateriel(e.target.value);
  }

 const  handleSubmit = async (e) =>{
  e.preventDefault();
  const formData = new FormData();
  formData.append('Nome', Nom);
  formData.append('Prenom', Prenom);
  formData.append('Mail', Mail);
  formData.append('Phone',Phone);
  formData.append('Fichier', Fichier);
  formData.append('Materiel', Materiel);
  formData.append('Msg', Msg);
  
  try {
    // Make a POST request using Axios
    const response = await axios.post('http://localhost:5000/mail', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    // Handle the response as needed
    console.log('Server Response:', response.data);
  } catch (error) {
    // Handle errors
    console.error('Error:', error);
  }
  console.log(formData);

 };
 
 return (
  <div className="conteneur">
  <form className="form" onSubmit={handleSubmit}>
    <label htmlFor="nom" id>Nom :</label><br></br>
    <input type="text" id="nom" name="nom" value={Nom} onChange={handleNomChange} required /><br></br>
    <label htmlFor="prenom">Prenom :</label><br></br>
    <input type="text" id="Prenom" name="Prenom" value={Prenom} onChange={handlePrenomChange} required /><br></br>
    <label htmlFor="email">Email :</label><br></br>
    <input type="email" id="email" name="Mail" value={Mail} onChange={handleMailChange} required /><br></br>
    <label htmlFor="email">Telephone :</label><br></br>
    <input type="phone" id="phone" name="phone" value={Phone} onChange={handlePhoneChange} /><br></br>
    <label htmlFor="fichier"> CHARGEZ UNE MAQUETTE :</label><br></br>
    <input
        type="file"
        id="fichier"
        name="fichier"
        onChange={handleFichierChange}
        accept=".3DM (Rhino), .3DS (3D Studio), .3MF, .AC3D, .ASE (3D Studio), .CATPART, .CATPRODUCT, .CGR (CATIA), .COB (TrueSpace), .DAE (Collada), .DXF / .DXF4 (AutoCAD), .IAM / .IPT (Autodesk Inventor), .JT, .IGES / .IGS, .KMZ (Google Earth), .LWO (LightWave), .MD2 / MD3 (Quake), .OFF, .PDF, .PLY (Stanford), .PRC, .PRT, .Q3O (Quick3D), .RAR, .SAT, .SCAD (OpenSCAD), .SKP (Sketchup), .SLDPRT, .SLDASM (SolidWorks), .STEP (ISO 10303), .TGZ, .U3D, .VRML, .X_T (Parasolid), .ZIP"
      /><br></br>
    <label htmlFor="Materiel">Materiel:</label><br></br>
    <select name="Materiel" onChange={handleMaterielChange} value={Materiel} >
      <option value = "PLA">PLA</option>
      <option value = "PRO1">PRO1</option>
      <option value = "PLA N">PLA N</option>
      <option value = "PETG">PETG</option>
      <option value = "NYLON">NYLON</option>
      <option value = "FLEXFIL">FLEXFIL</option>
      <option value = "FLEX 45">FLEX 45</option>
      <option value = "FLEX 60">FLEX 60</option>
      <option value = "PVA +">PVA +</option>
      <option value = "HIPS">HIPS</option>
      <option value = "FILAMENT CHARGE BOIS">FILAMENT CHARGE BOIS</option>
      <option value = "FILAMENT CHARGE LIEGE">FILAMENT CHARGE LIEGE</option>
      <option value = "FILAMENT CHARGE CUIVRE">FILAMENT CHARGE CUIVRE</option>
      <option value = "FILAMENT CHARGE BRONZE">FILAMENT CHARGE BRONZE</option>
      <option value = "FILAMENT CHARGE EN CARBONNE">FILAMENT CHARGE EN CARBONNE</option>
      <option value = "FILAMENT ARAMIDE KEVLAR">FILAMENT ARAMIDE KEVLAR</option>
      <option value = "FILAMENT FIBRE DE VERRE 15%">FILAMENT FIBRE DE VERRE 15%</option>
      <option value = "FILAMENT FIBRE DE VERRE 30%">FILAMENT FIBRE DE VERRE 30%</option>
    </select><br></br>
    <label htmlFor="message">Message :</label><br></br>
    <textarea id="message" name="Msg" value={Msg} onChange={handleMsgChange} rows="4" /><br></br>

    <button type="submit">Envoyer</button>
  </form>
  </div>
);



}
export default Devis;
