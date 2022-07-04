import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function CadastroEstacionamentos() {
  let navigate = useNavigate();
  const { register, handleSubmit } = useForm();

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

    fetch(endpoint, options).then(() => {
      alert("Estacionamento cadastrado com suceso!");
      navigate("/");
    });
  };

  return (
    <div className="container">
      <h1 className="form-title">Cadastrar novo estacionamento</h1>
      <div className="formularioPaginas">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="nome">Nome do estacionamento: </label>
          <input
            name="nome"
            type="text"
            placeholder="Digite o nome do estacionamento"
            {...register("nome")}
            required
          />

          <button type="submit">Cadastrar Estacionamento</button>
        </form>
      </div>
    </div>
  );
}

export default CadastroEstacionamentos;
