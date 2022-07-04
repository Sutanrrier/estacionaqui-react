import React from "react";
import { useParams } from "react-router-dom";
import DeleteButton from "../components/DeleteButton";

function RemoverCarros() {
  let { id } = useParams();

  return (
    <div className="container">
      <h1>Remover Veículo - ID: {id}</h1>
      <DeleteButton btnText="Remover Veículo" id={id}>
        Remover Veículo
      </DeleteButton>
    </div>
  );
}

export default RemoverCarros;
