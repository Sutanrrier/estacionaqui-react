import React from "react";
import { useParams } from "react-router-dom";

import "./Forms.css";

function VisualizarEstacionamentos() {
  let { id } = useParams();
  return <h1>Visualizar Estacionamentos {id}</h1>;
}

export default VisualizarEstacionamentos;
