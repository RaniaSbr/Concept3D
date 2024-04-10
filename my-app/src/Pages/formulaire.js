import Navbar from "../Components/Navbar";
import Devis from "../Components/Formulaire";
import Footer from "../Components/Footer";
import "../Styles/Form.css";

function Formulaire() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="">
        {" "}
        <div className="mt-20">
          {" "}
          <Devis></Devis>
        </div>
        <Footer></Footer>{" "}
      </div>
    </div>
  );
}

export default Formulaire;
