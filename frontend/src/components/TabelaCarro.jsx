import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import "./TabelaCarro.css";

function TabelaCarro(props) {
  const endpoint = props.endpoint;

  const [dados, setDados] = useState([]);

  useEffect(() => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((dados) => setDados(dados));
  }, []);

  return (
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
                <td>OPTIONS</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TabelaCarro;
