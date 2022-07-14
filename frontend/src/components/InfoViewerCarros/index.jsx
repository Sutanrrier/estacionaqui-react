import "./styles.css";
import { useSelector } from "react-redux";

import "materialize-css";
import { TextInput } from "react-materialize";

function FormViewer() {
  const carro = useSelector((state) => state.carro);

  return (
    <div className="container">
      <h1 className="form-title">
        INFORMAÇÕES DO VEÍCULO ENVIADAS COM SUCESSO!
      </h1>
      <div className="formularioPaginas">
        <TextInput
          label="Seu ID para o veículo"
          type="text"
          name="id"
          value={carro.id}
          readOnly
        />

        <TextInput
          label="Cor do veículo"
          type="text"
          name="cor"
          value={carro.cor}
          readOnly
        />

        <TextInput
          label="Placa do veículo"
          type="text"
          name="placa"
          value={carro.placa}
          readOnly
        />

        <TextInput
          label="Velocidade Máxima do veículo"
          type="text"
          name="velocidademax"
          value={carro.velocidademax}
          readOnly
        />

        <TextInput
          label="Cadastrado em"
          type="date"
          name="velocidademax"
          value={carro.dataCriacao}
          readOnly
        />
      </div>
    </div>
  );
}

export default FormViewer;
