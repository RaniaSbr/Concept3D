import React from "react";
import PropTypes from "prop-types";
import "../Styles/main.css"; // Import CSS file for styling

function Service({ title, text, imageUrl }) {
  return (
    <div className="">
      <div className="grid grid-cols-2 justify-items-center  content-center  w-[50vw]">
        <div className="moving-image-container gap-3 flex ">
          <img src={imageUrl} alt="" className="moving-image h-14" />
          <div className="grid">
            <p>{title}</p>
            <p className=" font-light text-sm w-[20vw]">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

Service.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default Service;
