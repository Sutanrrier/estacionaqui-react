import React from "react";
import { useParams } from "react-router-dom";

function AtualizarEstacionamentos() {
  let { id } = useParams();
  return <h1>Atualizar Estacionamentos {id}</h1>;
}

export default AtualizarEstacionamentos;
