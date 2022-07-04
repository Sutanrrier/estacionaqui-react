import React from "react";
import { useNavigate } from "react-router-dom";

import "./DeleteButton.css";

function DeleteButton(props) {
  const navigate = useNavigate();

  const endpointCarros = `http://localhost:8080/carros/${props.id}`;
  const options = {
    method: "DELETE",
    mode: "cors",
    cache: "default",
  };

  function handleClick() {
    fetch(endpointCarros, options).then(() => {
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
