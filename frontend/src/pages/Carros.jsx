import React from "react";
import CarCard from "../components/CarCard";
import SearchCarCard from "../components/SearchCarCard";
import { Row } from "react-materialize";

function Carros() {
  return (
    <div className="container">
      <Row>
        <CarCard />
        <SearchCarCard />
      </Row>
    </div>
  );
}

export default Carros;
