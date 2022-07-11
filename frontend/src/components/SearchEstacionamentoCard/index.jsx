import "materialize-css";
import { Col, Card, CardTitle } from "react-materialize";
import { useNavigate } from "react-router-dom";
import searchImage from "../../images/searchImage.svg";

function CarCard() {
  let navigate = useNavigate();

  function handleClick() {
    navigate("/consulta/estacionamentos");
  }

  return (
    <Col m={6} s={12}>
      <Card
        actions={[
          <a key="1" onClick={handleClick} style={{ cursor: "pointer" }}>
            Consultar estacionamentos
          </a>,
        ]}
        header={<CardTitle image={searchImage}></CardTitle>}
      >
        Consulte todos os estacionamentos cadastrados aqui
      </Card>
    </Col>
  );
}

export default CarCard;
