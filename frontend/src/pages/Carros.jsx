import RedirectOption from "../components/RedirectOption";

import searchImage from "../images/searchImage.svg";
import veiculoImage from "../images/veiculoImage.svg";
import "./MainPage.css";

function Carros() {
  return (
    <div>
      <div className="content-container">
        <RedirectOption
          title="CADASTRO"
          image={veiculoImage}
          btnText="Cadastrar novo veículo"
          url="teste"
        />

        <RedirectOption
          title="CONSULTA"
          image={searchImage}
          btnText="Consultar veículos atuais"
          url="teste"
        />
      </div>
    </div>
  );
}

export default Carros;
