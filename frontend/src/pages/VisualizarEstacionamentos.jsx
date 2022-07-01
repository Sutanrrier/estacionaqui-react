import React from "react";
import { useParams } from "react-router-dom";

function VisualizarEstacionamentos() {
  let { id } = useParams();
  return <h1>Visualizar Estacionamentos {id}</h1>;
}

export default VisualizarEstacionamentos;
