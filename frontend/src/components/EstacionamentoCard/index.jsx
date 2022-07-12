import "materialize-css";
import { Col, Card, CardTitle } from "react-materialize";
import { useNavigate } from "react-router-dom";
import estacionamentoImage from "../../images/estacionamentoImage.svg";

function CarCard() {
  let navigate = useNavigate();

  function handleClick() {
    navigate("/cadastro/estacionamentos");
  }

  return (
    <Col m={6} s={12}>
      <Card
        actions={[
          <a key="1" onClick={handleClick} style={{ cursor: "pointer" }}>
            Cadastrar novo estacionamento
          </a>,
        ]}
        header={<CardTitle image={estacionamentoImage}></CardTitle>}
      >
        Cadastre um novo estacionamento aqui
      </Card>
    </Col>
  );
}

export default CarCard;
