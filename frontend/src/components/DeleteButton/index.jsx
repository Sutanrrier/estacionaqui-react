import React from "react";
import { useNavigate } from "react-router-dom";

import "./styles.css";

function DeleteButton(props) {
  const navigate = useNavigate();

  const endpoint = props.endpoint;
  const options = {
    method: "DELETE",
    mode: "cors",
    cache: "default",
  };

  function handleClick() {
    fetch(endpoint, options).then(() => {
      alert(`${props.type} removido com sucesso!`);
      navigate("/");
    });
  }

  return (
    <div className="remove-section">
      <button className="remove-button" onClick={handleClick}>
        {props.btnText}
      </button>
    </div>
  );
}

export default DeleteButton;
