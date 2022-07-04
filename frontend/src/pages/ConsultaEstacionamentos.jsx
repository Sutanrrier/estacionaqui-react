import React from "react";
import TabelaEstacionamento from "../components/TabelaEstacionamento";

function ConsultaEstacionamentos() {
  return (
    <div>
      <TabelaEstacionamento endpoint="http://localhost:8080/estacionamentos" />
    </div>
  );
}

export default ConsultaEstacionamentos;
