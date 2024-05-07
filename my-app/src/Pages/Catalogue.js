import React from "react";
import Navbar from "../Components/Navbar";
import Materiel from "../Components/Materiel";
import Footer from "../Components/Footer";
import "../Styles/Catalogue.css";
function Catalogue(params) {
  return (
    <div className="catalogue">
      <Navbar></Navbar>
      <div className="md:mt-28">
        <Materiel></Materiel>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Catalogue;
