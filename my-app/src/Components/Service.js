import React from "react";
import PropTypes from "prop-types";
import "../Styles/main.css"; // Import CSS file for styling

function Service({ title, text, imageUrl }) {
  return (
    <div className="">
      <div className="flex  items-center gap-5 justify-center ">
        <div className="moving-image-container   flex items-start gap-0 justify-center">
          <img src={imageUrl} alt="" className="moving-image h-14" />
        </div>
        <div className="grid w-1/2">
          <p>{title}</p>
          <p className=" font-light text-sm ">{text}</p>
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
