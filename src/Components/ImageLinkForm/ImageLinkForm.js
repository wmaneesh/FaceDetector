import React from "react";
import "./ImageLinkForm.css";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div className="ma4 mt0" style={{paddingTop: '200px'}}>
      <legend className="center f1 fw6 ph0 mh0 white-80">Face Detector</legend>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input
            className="fpa2 input-reset ba  hover-bg-white w-70 center b"
            placeholder=" Enter URL"
            type="tex"
            onChange={onInputChange}
          />
          <button
            //className="b--white w-30 grow br2 f4 link ph3 pv2 dib white"
            className="b ph5 pv2 input-reset ba b--white  grow pointer f4 dib"
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
