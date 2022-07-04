import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import OptionButton from "./OptionButton";

import { FaPen, FaEye, FaTrash } from "react-icons/fa";

import "./TabelaStyle.css";

function TabelaEstacionamento(props) {
  const endpoint = props.endpoint;

  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((dados) => setDados(dados));
  }, []);

  return (
    <div className="table-container">
      <h1 className="table-title">Consulta de Estacionamentos</h1>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>AÇÕES</th>
          </tr>
        </thead>
        <tbody>
          {dados.map((objeto) => {
            return (
              <tr key={objeto.id}>
                <td>{objeto.id}</td>
                <td>{objeto.nome}</td>
                <td>
                  <OptionButton
                    title="Editar Estacionamento"
                    btnText={<FaPen />}
                    url="/atualizar/estacionamentos"
                    id={objeto.id}
                  />
                  <OptionButton
                    title="Visualizar Estacionamento"
                    btnText={<FaEye />}
                    url="/visualizar/estacionamentos"
                    id={objeto.id}
                  />
                  <OptionButton
                    title="Remover Estacionamento"
                    btnText={<FaTrash />}
                    url="/remover/estacionamentos"
                    id={objeto.id}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TabelaEstacionamento;
