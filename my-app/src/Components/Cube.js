import React from "react";
import "../Styles/cube.css"; // Importe main.css depuis le bon chemin

function Cube() {
  return (
    <div class="container">
      <div class="cube">
        <div class="face front"></div>
        <div class="face back"></div>
        <div class="face right"></div>
        <div class="face left"></div>
        <div class="face top"></div>
        <div class="face bottom"></div>
      </div>
    </div>
  );
}
export default Cube;
