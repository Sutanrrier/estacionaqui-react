import React from "react";
import { useParams } from "react-router-dom";

function RemoverCarros() {
  let { id } = useParams();
  return <h1>Remover Carros {id}</h1>;
}

export default RemoverCarros;
