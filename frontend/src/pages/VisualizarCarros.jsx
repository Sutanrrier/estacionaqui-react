import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function VisualizarCarros() {
  //Pega o id do carro com base no endpoint atual da URL.
  let { id } = useParams();

  const [dadosCarro, setDadosCarro] = useState([]);
  const [dadosEstacionamento, setDadosEstacionamento] = useState([]);

  const endpointCarros = `http://localhost:8080/carros/${id}`;

  useEffect(() => {
    fetch(endpointCarros)
      .then((response) => response.json())
      .then((dados) => {
        setDadosCarro(dados);
        setDadosEstacionamento(dados.estacionamento);
      });
  }, []);

  return (
    <div className="container">
      <h1 className="form-title">Visualizando Veiculo - ID: {id}</h1>
      <div className="formularioPaginas">
        <label htmlFor="cor">Cor do veículo: </label>
        <input
          name="cor"
          type="text"
          readOnly="readonly"
          value={dadosCarro.cor}
        />

        <label htmlFor="placa">Placa do veículo: </label>
        <input
          name="placa"
          type="text"
          readOnly="readonly"
          value={dadosCarro.placa}
        />

        <label htmlFor="velocidademax">Velocidade Máxima: </label>
        <input
          name="velocidademax"
          type="text"
          readOnly="readonly"
          value={dadosCarro.velocidademax}
        />

        <label htmlFor="estacionamento_id">Cadastrado em: </label>
        <input
          name="dataCriacao"
          type="date"
          readOnly="readonly"
          value={dadosCarro.dataCriacao}
        />

        <label htmlFor="estacionamento_id">Estacionado em: </label>
        <input
          name="estacionamento_nome"
          type="text"
          readOnly="readonly"
          value={dadosEstacionamento.nome}
        />
      </div>
    </div>
  );
}

export default VisualizarCarros;
