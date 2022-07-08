import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

import "./Forms.css";
import { useDispatch, useSelector } from "react-redux";
import { listarTodosEstacionamentos } from "../reducers/listaEstacionamentoSlice";
import { carroAtualAtivo } from "../reducers/carSlice";

function AtualizarCarros() {
  let { id } = useParams(); //Pega o id da página
  let navigate = useNavigate(); //Usado para navegar entre as rotas
  const { register, handleSubmit } = useForm(); //Manipula o formulário
  const dispatch = useDispatch(); //Permite fazer alterações nos estados globais do STORE

  //Selectors que puxam os estados atuais do STORE
  const listaEstacionamentos = useSelector(
    (state) => state.listaEstacionamentos.lista
  );

  useEffect(() => {
    const endpointEstacionamentos = "http://localhost:8080/estacionamentos/all";
    fetch(endpointEstacionamentos)
      .then((response) => response.json())
      .then((dados) => dispatch(listarTodosEstacionamentos(dados)));
  }, []);

  //Faz o request PUT para o backend a partir dos dados preenchidos no form
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
      dispatch(carroAtualAtivo(body));
      alert("Veículo atualizado com sucesso!");
      navigate("/sucesso/carros");
    });
  };

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
            {listaEstacionamentos.map((dados) => {
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
