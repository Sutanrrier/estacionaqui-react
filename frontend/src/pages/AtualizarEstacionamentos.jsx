import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { estacionamentoAtualAtivo } from "../reducers/estacionamentoSlice";

import "materialize-css";
import { TextInput } from "react-materialize";

function AtualizarEstacionamentos() {
  //Pega o id do carro com base no endpoint atual da URL.
  let { id } = useParams();
  let navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-type", "application/json; charset=UTF-8");

    const endpoint = `http://localhost:8080/estacionamentos/${id}`;
    const body = {
      id: data.id,
      nome: data.nome,
    };

    const options = {
      method: "PUT",
      body: JSON.stringify(body),
      mode: "cors",
      cache: "default",
      headers: myHeaders,
    };

    fetch(endpoint, options).then(() => {
      dispatch(estacionamentoAtualAtivo(body));
      alert("Estacionamento atualizado com sucesso!");
      navigate("/sucesso/estacionamentos");
    });
  };

  return (
    <div className="container">
      <h1 className="form-title">Atualizar Estacionamento</h1>
      <div className="formularioPaginas">
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            hidden
            type="number"
            name="id"
            value={id}
            {...register("id")}
            required
          />

          <TextInput
            label="Novo nome do estacionamento"
            type="text"
            name="nome"
            {...register("nome")}
            required
          />

          <button type="submit">Atualizar Dados</button>
        </form>
      </div>
    </div>
  );
}

export default AtualizarEstacionamentos;
