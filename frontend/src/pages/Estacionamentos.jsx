import React from "react";
import RedirectOption from "../components/RedirectOption";

import searchImage from "../images/searchImage.svg";
import estacionamentoImage from "../images/estacionamentoImage.svg";

import "./MainPage.css";
function Estacionamentos() {
  return (
    <div>
      <div className="content-container">
        <RedirectOption
          title="CADASTRO"
          image={estacionamentoImage}
          btnText="Cadastrar novo estacionamento"
          url="/cadastro/estacionamentos"
        />

        <RedirectOption
          title="CONSULTA"
          image={searchImage}
          btnText="Consultar estacionamentos atuais"
          url="/consulta/estacionamentos"
        />
      </div>
    </div>
  );
}

export default Estacionamentos;
