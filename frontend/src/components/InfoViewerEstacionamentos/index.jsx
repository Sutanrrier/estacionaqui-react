import "./styles.css";
import { useSelector } from "react-redux";

import "materialize-css";
import { TextInput } from "react-materialize";

function FormViewer() {
  const estacionamento = useSelector((state) => state.estacionamento);

  return (
    <div className="container">
      <h1 className="form-title">
        INFORMAÇÕES DO ESTACIONAMENTO ENVIADAS COM SUCESSO!
      </h1>
      <div className="formularioPaginas">
        <TextInput
          label="Seu ID para o estacioanmento"
          type="text"
          name="id"
          value={estacionamento.id}
          readOnly
        />

        <TextInput
          label="Nome do estacioanmento"
          type="text"
          name="nome"
          value={estacionamento.nome}
          readOnly
        />

        <TextInput
          label="Cadastrado em:"
          type="date"
          name="dataCriacao"
          value={estacionamento.dataCriacao}
          readOnly
        />
      </div>
    </div>
  );
}

export default FormViewer;
