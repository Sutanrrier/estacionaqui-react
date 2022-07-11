import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { estacionamentoAtualAtivo } from "../reducers/estacionamentoSlice";

function VisualizarEstacionamentos() {
  //Pega o id do carro com base no endpoint atual da URL.
  let { id } = useParams();

  const endpoint = `http://localhost:8080/estacionamentos/${id}`;

  const estacionamento = useSelector((state) => state.estacionamento);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((dados) => {
        dispatch(estacionamentoAtualAtivo(dados));
      });
  }, []);

  return (
    <div className="container">
      <h1 className="form-title">
        Visualizando Estacionamento - ID: {estacionamento.id}
      </h1>
      <div className="formularioPaginas">
        <label htmlFor="cor">Nome do estacionamento: </label>
        <input
          name="nome"
          type="text"
          readOnly="readonly"
          value={estacionamento.nome}
        />

        <label htmlFor="estacionamento_id">Cadastrado em: </label>
        <input
          name="dataCriacao"
          type="date"
          readOnly="readonly"
          value={estacionamento.dataCriacao}
        />
      </div>
    </div>
  );
}

export default VisualizarEstacionamentos;
