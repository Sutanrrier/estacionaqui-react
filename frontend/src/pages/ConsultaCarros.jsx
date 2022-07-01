import React from "react";
import TabelaCarro from "../components/TabelaCarro";

function ConsultaCarros() {
  return (
    <div>
      <TabelaCarro endpoint="http://localhost:8080/carros" />
    </div>
  );
}

export default ConsultaCarros;
