import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listarTodosEstacionamentos } from "../reducers/listaEstacionamentoSlice";
import { carroAtualAtivo } from "../reducers/carSlice";

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
      dispatch(carroAtualAtivo(body));
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
            {listaEstacionamento.map((dados) => {
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
