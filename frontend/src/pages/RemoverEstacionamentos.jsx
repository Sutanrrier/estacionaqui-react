import React from "react";
import { useParams } from "react-router-dom";

function RemoverEstacionamentos() {
  let { id } = useParams();
  return <h1>Remover Estacionamentos {id}</h1>;
}

export default RemoverEstacionamentos;
