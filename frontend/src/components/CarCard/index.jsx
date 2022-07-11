import "materialize-css";
import { Col, Card, CardTitle } from "react-materialize";
import { useNavigate } from "react-router-dom";
import veiculoImage from "../../images/veiculoImage.svg";

function CarCard() {
  let navigate = useNavigate();

  function handleClick() {
    navigate("/cadastro/carros");
  }

  return (
    <Col m={6} s={12}>
      <Card
        actions={[
          <a key="1" onClick={handleClick} style={{ cursor: "pointer" }}>
            Cadastrar novo veículo
          </a>,
        ]}
        header={<CardTitle image={veiculoImage}></CardTitle>}
      >
        Cadastre um novo veículo aqui
      </Card>
    </Col>
  );
}

export default CarCard;
