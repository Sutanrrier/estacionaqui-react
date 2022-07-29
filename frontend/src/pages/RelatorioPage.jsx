import RelatorioByEstacionamento from "../components/RelatorioByEstacionamento/RelatorioByEstacionamento";
import RelatorioCarros from "../components/RelatorioCarros/RelatorioCarros";

function RelatorioPage() {
  return (
    <div className="container">
      <h1>Relatórios</h1>
      <div className="estacionaqui-relatarios-container">
        <RelatorioCarros />
        <RelatorioByEstacionamento />
      </div>
    </div>
  );
}

export default RelatorioPage;
