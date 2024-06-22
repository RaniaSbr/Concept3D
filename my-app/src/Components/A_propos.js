import React from "react";
function Propos(props) {
  const { texte, couleur } = props;
  return (
    <div className="w-screen flex justify-start items-start">
      <div
        style={{ backgroundColor: couleur }}
        className="ml-8 py-2 px-8 w-fit rounded-bl-2xl rounded-br-2xl"
      >
        <p className=""> {texte}</p>
      </div>
    </div>
  );
}
export default Propos;
