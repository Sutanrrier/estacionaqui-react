import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { estacionamentoAtualAtivo } from "../reducers/estacionamentoSlice";

import "materialize-css";
import { TextInput } from "react-materialize";

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
      <h2 className="form-title">
        Visualizando Estacionamento - ID: {estacionamento.id}
      </h2>
      <div className="formularioPaginas">
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

export default VisualizarEstacionamentos;
