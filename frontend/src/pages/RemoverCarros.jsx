import React from "react";
import { useParams } from "react-router-dom";
import DeleteButton from "../components/DeleteButton";

function RemoverCarros() {
  let { id } = useParams();
  const endpoint = `http://localhost:8080/carros/${id}`;

  return (
    <div className="container">
      <h1>Remover Veículo - ID: {id}</h1>
      <DeleteButton
        btnText="Remover Veículo"
        endpoint={endpoint}
        type="Veículo"
      />
    </div>
  );
}

export default RemoverCarros;
