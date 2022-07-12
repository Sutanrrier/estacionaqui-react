import React from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";
function OptionButton(props) {
  let navigate = useNavigate();

  function handleClickButton() {
    navigate(`${props.url}/${props.id}`);
  }

  return (
    <button
      className="estacionaaqui-option-button"
      title={props.title}
      onClick={handleClickButton}
    >
      {props.btnText}
    </button>
  );
}

export default OptionButton;
