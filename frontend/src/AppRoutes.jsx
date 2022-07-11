import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavigationBar from "./components/Navbar";
import Footer from "./components/Footer";

import App from "./pages/App";
import Carros from "./pages/Carros";
import Estacionamentos from "./pages/Estacionamentos";
import ErrorPage from "./pages/ErrorPage";
import ConsultaCarros from "./pages/ConsultaCarros";
import CadastroCarros from "./pages/CadastroCarros";
import ConsultaEstacionamentos from "./pages/ConsultaEstacionamentos";
import CadastroEstacionamentos from "./pages/CadastroEstacionamentos";
import AtualizarCarros from "./pages/AtualizarCarros";
import AtualizarEstacionamentos from "./pages/AtualizarEstacionamentos";
import VisualizarCarros from "./pages/VisualizarCarros";
import VisualizarEstacionamentos from "./pages/VisualizarEstacionamentos";
import RemoverCarros from "./pages/RemoverCarros";
import RemoverEstacionamentos from "./pages/RemoverEstacionamentos";
import SucessoCarro from "./pages/SucessoCarro";
import SucessoEstacionamento from "./pages/SucessoEstacionamento";

function AppRoutes() {
  return (
    <BrowserRouter>
      <NavigationBar />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/carros" element={<Carros />} />
        <Route path="/estacionamentos" element={<Estacionamentos />} />

        <Route path="/consulta/carros" element={<ConsultaCarros />} />
        <Route
          path="/consulta/estacionamentos"
          element={<ConsultaEstacionamentos />}
        />

        <Route path="/cadastro/carros" element={<CadastroCarros />} />
        <Route
          path="/cadastro/estacionamentos"
          element={<CadastroEstacionamentos />}
        />

        <Route path="/sucesso/carros" element={<SucessoCarro />} />
        <Route
          path="/sucesso/estacionamentos"
          element={<SucessoEstacionamento />}
        />

        <Route path="/atualizar/carros/:id" element={<AtualizarCarros />} />
        <Route
          path="/atualizar/estacionamentos/:id"
          element={<AtualizarEstacionamentos />}
        />

        <Route path="/visualizar/carros/:id" element={<VisualizarCarros />} />
        <Route
          path="/visualizar/estacionamentos/:id"
          element={<VisualizarEstacionamentos />}
        />

        <Route path="/remover/carros/:id" element={<RemoverCarros />} />
        <Route
          path="/remover/estacionamentos/:id"
          element={<RemoverEstacionamentos />}
        />

        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
