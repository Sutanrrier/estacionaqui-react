import React from "react";
import { useNavigate } from "react-router-dom";

import "./RedirectOption.css";

function RedirectOption(props) {
  let navigate = useNavigate();

  function handleButtonClick() {
    navigate(props.url);
  }

  return (
    <div className="section-container">
      <img className="option-image" src={props.image} alt="image" />
      <h2 className="option-title">{props.title}</h2>
      <button className="option-button" onClick={handleButtonClick}>
        {props.btnText}
      </button>
    </div>
  );
}

export default RedirectOption;
