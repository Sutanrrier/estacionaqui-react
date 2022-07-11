import React from "react";

import { carroAtualAtivo } from "../reducers/carSlice";

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function VisualizarCarros() {
  //Pega o id do carro com base no endpoint atual da URL.
  let { id } = useParams();
  const endpoint = `http://localhost:8080/carros/${id}`;

  const carro = useSelector((state) => state.carro);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((dados) => {
        dispatch(carroAtualAtivo(dados));
      });
  }, []);

  return (
    <div className="container">
      <h1 className="form-title">Visualizando Veiculo - ID: {carro.id}</h1>
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

        <label htmlFor="estacionamento_id">Cadastrado em: </label>
        <input
          name="dataCriacao"
          type="date"
          readOnly="readonly"
          value={carro.dataCriacao}
        />

        <label htmlFor="estacionamento_id">Estacionado em: </label>
        <input
          name="estacionamento_nome"
          type="text"
          readOnly="readonly"
          value={carro.estacionamento.nome}
        />
      </div>
    </div>
  );
}

export default VisualizarCarros;
