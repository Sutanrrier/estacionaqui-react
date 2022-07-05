import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

import "./Forms.css";

function AtualizarCarros() {
  //Pega o id do carro com base no endpoint atual da URL.
  let { id } = useParams();

  const endpointEstacionamentos = "http://localhost:8080/estacionamentos";

  const [estacionamentos, setEstacionamentos] = useState([]);
  let navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-type", "application/json; charset=UTF-8");

    const endpointCarros = `http://localhost:8080/carros/${id}`;
    const body = {
      id: data.id,
      cor: data.cor,
      placa: data.placa,
      velocidademax: parseInt(data.velocidademax),
      estacionamento: {
        id: parseInt(data.estacionamento_id),
      },
    };

    const options = {
      method: "PUT",
      body: JSON.stringify(body),
      mode: "cors",
      cache: "default",
      headers: myHeaders,
    };

    fetch(endpointCarros, options).then(() => {
      alert("Veículo atualizado com sucesso!");
      navigate("/");
    });
  };

  useEffect(() => {
    fetch(endpointEstacionamentos)
      .then((response) => response.json())
      .then((dados) => setEstacionamentos(dados.content));
  }, []);

  return (
    <div className="container">
      <h1 className="form-title">Atualizar Veículos</h1>
      <div className="formularioPaginas">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="number"
            hidden
            name="id"
            value={id}
            {...register("id")}
            required
          />

          <label htmlFor="cor">Nova Cor: </label>
          <input
            name="cor"
            type="text"
            placeholder="Digite a nova cor do veículo"
            {...register("cor")}
            required
          />

          <label htmlFor="placa">Nova Placa: </label>
          <input
            name="placa"
            type="text"
            placeholder="Digite a nova placa do veículo"
            {...register("placa")}
            required
          />

          <label htmlFor="velocidademax">Velocidade Máxima: </label>
          <input
            name="velocidademax"
            type="number"
            placeholder="Digite a velocidade máxima do veículo"
            {...register("velocidademax")}
            required
          />

          <label htmlFor="estacionamento_id">Estacionado atualmente: </label>
          <select
            name="estacionamento_id"
            {...register("estacionamento_id")}
            required
          >
            {estacionamentos.map((dados) => {
              return (
                <option key={dados.id} value={dados.id}>
                  {dados.nome}
                </option>
              );
            })}
          </select>
          <button type="submit">Atualizar Dados</button>
        </form>
      </div>
    </div>
  );
}

export default AtualizarCarros;
