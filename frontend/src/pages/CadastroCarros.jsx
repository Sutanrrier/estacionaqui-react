import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";

function CadastroCarros() {
  //Pega o id do carro com base no endpoint atual da URL.
  let { id } = useParams();

  const endpointEstacionamentos = "http://localhost:8080/estacionamentos";

  const [estacionamentos, setEstacionamentos] = useState([]);
  let navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-type", "application/json; charset=UTF-8");

    const endpointCarros = "http://localhost:8080/carros";
    const body = {
      cor: data.cor,
      placa: data.placa,
      velocidademax: parseInt(data.velocidademax),
      estacionamento: {
        id: parseInt(data.estacionamento_id),
      },
    };

    const options = {
      method: "POST",
      body: JSON.stringify(body),
      mode: "cors",
      cache: "default",
      headers: myHeaders,
    };

    fetch(endpointCarros, options).then(() => {
      alert("Veículo cadastrado com suceso!");
      navigate("/");
    });
  };

  useEffect(() => {
    fetch(endpointEstacionamentos)
      .then((response) => response.json())
      .then((dados) => setEstacionamentos(dados));
  }, []);

  return (
    <div className="container">
      <h1 className="form-title">Cadastrar novo veículo</h1>
      <div className="formularioPaginas">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="cor">Cor do veículo: </label>
          <input
            name="cor"
            type="text"
            placeholder="Digite a cor do veículo"
            {...register("cor")}
            required
          />

          <label htmlFor="placa">Placa do veículo: </label>
          <input
            name="placa"
            type="text"
            placeholder="Digite a placa do veículo"
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

          <label htmlFor="estacionamento_id">Estacionado em: </label>
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
          <button type="submit">Cadastrar Veículo</button>
        </form>
      </div>
    </div>
  );
}

export default CadastroCarros;
