import React from "react";
import EstacionamentoCard from "../components/EstacionamentoCard";
import SearchEstacionamentoCard from "../components/SearchEstacionamentoCard";
import { Row } from "react-materialize";

function Estacionamentos() {
  return (
    <div className="container">
      <Row>
        <EstacionamentoCard />
        <SearchEstacionamentoCard />
      </Row>
    </div>
  );
}

export default Estacionamentos;
