import React from "react";
import { useParams } from "react-router-dom";
import DeleteButton from "../components/DeleteButton";

function RemoverEstacionamentos() {
  let { id } = useParams();
  const endpoint = `http://localhost:8080/estacionamentos/${id}`;

  return (
    <div className="container">
      <h1>Remover Estacionamento - ID: {id}</h1>
      <DeleteButton btnText="Remover Estacionamento" endpoint={endpoint} />
    </div>
  );
}

export default RemoverEstacionamentos;
