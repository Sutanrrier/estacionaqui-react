import React from "react";

import { carroAtualAtivo } from "../reducers/carSlice";

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "materialize-css";
import { TextInput } from "react-materialize";

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
      <h2 className="form-title">Visualizando Veiculo - ID: {carro.id}</h2>
      <div className="formularioPaginas">
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

        <TextInput
          label="Estacionado em"
          type="text"
          name="estacionamento_nome"
          value={carro.estacionamento.nome}
          readOnly
        />
      </div>
    </div>
  );
}

export default VisualizarCarros;
