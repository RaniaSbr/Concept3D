import React from "react";
import Navbar from "../Components/Navbar";
import Materiel from "../Components/Materiel";
import "../Styles/Catalogue.css";
function Catalogue(params) {
  return (
    <div className="catalogue">
      <Navbar></Navbar>
      <div className="mt-32">
        <Materiel></Materiel>
      </div>
    </div>
  );
}
export default Catalogue;
