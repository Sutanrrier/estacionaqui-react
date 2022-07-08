import "./styles.css";
import { useSelector } from "react-redux";

function FormViewer() {
  const carro = useSelector((state) => state.carro);

  return (
    <div className="container">
      <h1 className="form-title">
        INFORMAÇÕES DO VEÍCULO ENVIADAS COM SUCESSO!
      </h1>
      <div className="formularioPaginas">
        <label htmlFor="cor">Cor do veículo: </label>
        <input name="cor" type="text" readOnly="readonly" value={carro.cor} />

        <label htmlFor="placa">Placa do veículo: </label>
        <input
          name="placa"
          type="text"
          readOnly="readonly"
          value={carro.placa}
        />

        <label htmlFor="velocidademax">Velocidade Máxima: </label>
        <input
          name="velocidademax"
          type="text"
          readOnly="readonly"
          value={carro.velocidademax}
        />
      </div>
    </div>
  );
}

export default FormViewer;
