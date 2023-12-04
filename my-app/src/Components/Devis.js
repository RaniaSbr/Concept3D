import React from "react";
import "../Styles/Devis.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Devis(params) {
  const navigate = useNavigate();
  return (
    <div>
      <button
        className="devis"
        onClick={() => {
          navigate("/devis");
        }}
      >
        Obtenir un devis{" "}
      </button>
    </div>
  );
}
export default Devis;
