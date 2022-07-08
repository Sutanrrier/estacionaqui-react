import "./styles.css";
import { useSelector } from "react-redux";

function FormViewer() {
  const estacionamento = useSelector((state) => state.estacionamento);

  return (
    <div className="container">
      <h1 className="form-title">
        INFORMAÇÕES DO ESTACIONAMENTO ENVIADAS COM SUCESSO!
      </h1>
      <div className="formularioPaginas">
        <label htmlFor="cor">Nome do estacionamento: </label>
        <input
          name="nome"
          type="text"
          readOnly="readonly"
          value={estacionamento.nome}
        />
      </div>
    </div>
  );
}

export default FormViewer;
