import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import "./Forms.css";

function VisualizarEstacionamentos() {
  //Pega o id do carro com base no endpoint atual da URL.
  let { id } = useParams();

  const [dadosEstacionamento, setDadosEstacionamento] = useState([]);

  const endpoint = `http://localhost:8080/estacionamentos/${id}`;

  useEffect(() => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((dados) => {
        setDadosEstacionamento(dados);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="form-title">Visualizando Estacionamento - ID: {id}</h1>
      <div className="formularioPaginas">
        <label htmlFor="cor">Nome do estacionamento: </label>
        <input
          name="nome"
          type="text"
          readOnly="readonly"
          value={dadosEstacionamento.nome}
        />

        <label htmlFor="estacionamento_id">Cadastrado em: </label>
        <input
          name="dataCriacao"
          type="date"
          readOnly="readonly"
          value={dadosEstacionamento.dataCriacao}
        />
      </div>
    </div>
  );
}

export default VisualizarEstacionamentos;
