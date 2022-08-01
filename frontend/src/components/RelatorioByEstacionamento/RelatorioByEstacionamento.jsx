import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button } from "react-materialize";
import { useDispatch, useSelector } from "react-redux";
import { listarTodosEstacionamentos } from "../../reducers/listaEstacionamentoSlice";

function RelatorioByEstacionamento() {
  const { register, handleSubmit } = useForm(); //Manipula o formulário
  const dispatch = useDispatch(); //Permite fazer alterações nos estados globais do STORE

  //Selectors que puxam os estados atuais do STORE
  const listaEstacionamento = useSelector(
    (state) => state.listaEstacionamentos.lista
  );

  const onSubmit = (data) => {
    const url = `http://localhost:8080/carros/relatorio/${data.estacionamento_id}`;

    fetch(url)
      .then((response) => response.blob())
      .then((data) => {
        const url = URL.createObjectURL(data);
        window.open(url, "__blank", "noopener,noreferrer");
      });
  };

  useEffect(() => {
    const endpointEstacionamentos = "http://localhost:8080/estacionamentos/all";
    fetch(endpointEstacionamentos)
      .then((response) => response.json())
      .then((dados) => dispatch(listarTodosEstacionamentos(dados)));
  }, []);

  return (
    <div className="estacionaqui-relatorio-allcarros">
      <p className="estacionaqui-relatorio-label">
        Gerar relatório de carros por estacionamento
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <select
          name="estacionamento_id"
          {...register("estacionamento_id")}
          required
          style={{ display: "block" }}
          defaultValue={0}
          className="input-field col"
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
        <Button
          large
          node="button"
          waves="light"
          className="estacionaqui-relatorio-button"
        >
          GERAR PDF
        </Button>
      </form>
    </div>
  );
}

export default RelatorioByEstacionamento;
