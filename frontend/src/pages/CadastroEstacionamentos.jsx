import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { estacionamentoAtualAtivo } from "../reducers/estacionamentoSlice";

import "materialize-css";
import { TextInput } from "react-materialize";

function CadastroEstacionamentos() {
  let navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-type", "application/json; charset=UTF-8");

    const endpoint = "http://localhost:8080/estacionamentos";
    const body = {
      nome: data.nome,
    };

    const options = {
      method: "POST",
      body: JSON.stringify(body),
      mode: "cors",
      cache: "default",
      headers: myHeaders,
    };

    fetch(endpoint, options)
      .then((response) => response.json())
      .then((data) => {
        const resEstacionamento = {
          id: data.id,
          nome: data.nome,
          dataCriacao: data.dataCriacao,
        };
        dispatch(estacionamentoAtualAtivo(resEstacionamento));
        alert("Estacionamento cadastrado com suceso!");
        navigate("/sucesso/estacionamentos");
      });
  };

  return (
    <div className="container">
      <h2 className="form-title">Cadastrar novo estacionamento</h2>
      <form className="formularioPaginas" onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          label="Nome do estacionamento"
          type="text"
          name="nome"
          {...register("nome")}
          required
        />

        <button type="submit">Cadastrar Estacionamento</button>
      </form>
    </div>
  );
}

export default CadastroEstacionamentos;
