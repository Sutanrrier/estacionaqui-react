import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import OptionButton from "../OptionButton";

import {
  FaPen,
  FaEye,
  FaTrash,
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
} from "react-icons/fa";

import "materialize-css";
import { Table } from "react-materialize";

function TabelaEstacionamento() {
  const endpoint = "http://localhost:8080/estacionamentos";

  const [totalPages, setTotalPages] = useState();
  const [page, setPage] = useState(0);
  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch(`${endpoint}?page=${page}`)
      .then((response) => response.json())
      .then((dados) => {
        setDados(dados.content);
        setTotalPages(dados.totalPages);
      });
  }, [page]);

  function HandleProximaPagina() {
    if (page < totalPages - 1) {
      setPage(page + 1);
    }
  }

  function HandlePaginaAnterior() {
    if (page > 0) {
      setPage(page - 1);
    }
  }

  return (
    <div className="container">
      <div>
        <h1>Consulta de Estacionamentos</h1>
        <Table centered>
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
        </Table>
      </div>

      <div className="pagination-container">
        <button className="pagination-button" onClick={HandlePaginaAnterior}>
          <FaArrowAltCircleLeft />
        </button>
        <span className="pagination-text">Página {page + 1}</span>
        <button className="pagination-button" onClick={HandleProximaPagina}>
          <FaArrowAltCircleRight />
        </button>
      </div>
    </div>
  );
}

export default TabelaEstacionamento;
