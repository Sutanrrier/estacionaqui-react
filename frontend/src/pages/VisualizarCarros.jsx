import React from "react";
import { useParams } from "react-router-dom";

function VisualizarCarros() {
  let { id } = useParams();
  return <h1>VisualizarCarros {id}</h1>;
}

export default VisualizarCarros;
