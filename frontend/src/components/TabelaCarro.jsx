import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import OptionButton from "./OptionButton";

import {
  FaPen,
  FaEye,
  FaTrash,
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
} from "react-icons/fa";

import "./TabelaStyle.css";

function TabelaCarro() {
  const endpoint = "http://localhost:8080/carros";

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
      <div className="table-container">
        <h1 className="table-title">Consulta de Veículos</h1>

        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>COR</th>
              <th>PLACA</th>
              <th>VELOCIDADE MÁXIMA</th>
              <th>ESTACIONADO EM</th>
              <th>AÇÕES</th>
            </tr>
          </thead>
          <tbody>
            {dados.map((objeto) => {
              return (
                <tr key={objeto.id}>
                  <td>{objeto.id}</td>
                  <td>{objeto.cor}</td>
                  <td>{objeto.placa}</td>
                  <td>{objeto.velocidademax + " Km/h"}</td>
                  <td>{objeto.estacionamento.nome}</td>
                  <td>
                    <OptionButton
                      title="Editar Veículo"
                      btnText={<FaPen />}
                      url="/atualizar/carros"
                      id={objeto.id}
                    />
                    <OptionButton
                      title="Visualizar Veículo"
                      btnText={<FaEye />}
                      url="/visualizar/carros"
                      id={objeto.id}
                    />
                    <OptionButton
                      title="Remover Veículo"
                      btnText={<FaTrash />}
                      url="/remover/carros"
                      id={objeto.id}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
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

export default TabelaCarro;
