import React from "react";
import { useNavigate } from "react-router-dom";

import "./DeleteButton.css";

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
      alert("Veículo removido com sucesso!");
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
