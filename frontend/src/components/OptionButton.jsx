import React from "react";
import { useNavigate } from "react-router-dom";

function OptionButton(props) {
  let navigate = useNavigate();

  function handleClickButton() {
    navigate(`${props.url}/${props.id}`);
  }

  return (
    <button title={props.title} onClick={handleClickButton}>
      {props.btnText}
    </button>
  );
}

export default OptionButton;
