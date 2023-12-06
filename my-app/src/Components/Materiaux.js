import React from "react";
import "../Styles/Materiaux.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Materiaux(params) {
  const navigate = useNavigate();

  return (
    <div>
      <button
        className="materiel"
        onClick={() => {
          navigate("/Catalogue");
        }}
      >
        {"Catalogue des materiaux "}
      </button>
    </div>
  );
}
export default Materiaux;
