import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listarTodosEstacionamentos } from "../reducers/listaEstacionamentoSlice";
import { carroAtualAtivo } from "../reducers/carSlice";

import "materialize-css";
import { TextInput } from "react-materialize";

function CadastroCarros() {
  let navigate = useNavigate(); //Usado para navegar entre as rotas
  const { register, handleSubmit } = useForm(); //Manipula o formulário
  const dispatch = useDispatch(); //Permite fazer alterações nos estados globais do STORE

  //Selectors que puxam os estados atuais do STORE
  const listaEstacionamento = useSelector(
    (state) => state.listaEstacionamentos.lista
  );

  //Faz o request POST para o backend a partir dos dados preenchidos no form
  const onSubmit = (data) => {
    const myHeaders = new Headers();
    myHeaders.append("Content-type", "application/json; charset=UTF-8");

    const endpointCarros = "http://localhost:8080/carros";
    const body = {
      cor: data.cor,
      placa: data.placa,
      velocidademax: parseInt(data.velocidademax),
      estacionamento: {
        id: data.estacionamento_id,
      },
    };

    const options = {
      method: "POST",
      body: JSON.stringify(body),
      mode: "cors",
      cache: "default",
      headers: myHeaders,
    };

    fetch(endpointCarros, options)
      .then((response) => response.json())
      .then((data) => {
        const resCarro = {
          id: data.id,
          cor: data.cor,
          placa: data.placa,
          velocidademax: parseInt(data.velocidademax),
          dataCriacao: data.dataCriacao,
        };
        dispatch(carroAtualAtivo(resCarro));
        alert("Veículo cadastrado com suceso!");
        navigate("/sucesso/carros");
      });
  };

  useEffect(() => {
    const endpointEstacionamentos = "http://localhost:8080/estacionamentos/all";
    fetch(endpointEstacionamentos)
      .then((response) => response.json())
      .then((dados) => dispatch(listarTodosEstacionamentos(dados)));
  }, []);

  return (
    <div className="container">
      <h1>Cadastrar novo veículo</h1>
      <form className="formularioPaginas" onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          label="Cor do veículo"
          type="text"
          name="cor"
          {...register("cor")}
          required
        />
        <TextInput
          label="Placa do veículo"
          type="text"
          name="placa"
          {...register("placa")}
          required
        />
        <TextInput
          label="Velocidade máxima do veículo"
          type="number"
          name="velocidademax"
          {...register("velocidademax")}
          required
        />

        <div className="input-field col">
          <select
            name="estacionamento_id"
            {...register("estacionamento_id")}
            required
            style={{ display: "block" }}
            defaultValue={0}
          >
            <option value="0" disabled>
              Escolha um estacionamento
            </option>
            {listaEstacionamento.map((dados) => {
              return (
                <option key={dados.id} value={dados.id}>
                  {dados.nome}
                </option>
              );
            })}
          </select>
        </div>

        <button type="submit">Cadastrar Veículo</button>
      </form>
    </div>
  );
}

export default CadastroCarros;
