import React from "react";
import { useParams } from "react-router-dom";

function AtualizarCarros() {
  let { id } = useParams();
  return <h1>Atualizar Carros {id}</h1>;
}

export default AtualizarCarros;
