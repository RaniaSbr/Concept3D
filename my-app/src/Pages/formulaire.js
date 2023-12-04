import Navbar from "../Components/Navbar";
import Devis from "../Components/Formulaire";
import "../Styles/Form.css";

function Formulaire() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="dev">
        {" "}
        <Devis></Devis>
      </div>
    </div>
  );
}

export default Formulaire;
