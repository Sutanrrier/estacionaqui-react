import { Button } from "react-materialize";

function RelatorioCarros() {
  function handleClick() {
    const url = "http://localhost:8080/carros/relatorio/all";

    fetch(url).then(() => {
      alert("Relatório gerado com sucesso!");
    });
  }

  return (
    <div className="estacionaqui-relatorio-allcarros">
      <p className="estacionaqui-relatorio-label">
        Gerar relatório de todos os veículos salvos
      </p>
      <Button
        large
        node="button"
        waves="light"
        className="estacionaqui-relatorio-button"
        onClick={handleClick}
      >
        GERAR PDF
      </Button>
    </div>
  );
}

export default RelatorioCarros;
