import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import App from "./pages/App";
import Carros from "./pages/Carros";
import Estacionamentos from "./pages/Estacionamentos";
import ErrorPage from "./pages/ErrorPage";
import ConsultaCarros from "./pages/ConsultaCarros";
import CadastroCarros from "./pages/CadastroCarros";
import ConsultaEstacionamentos from "./pages/ConsultaEstacionamentos";
import CadastroEstacionamentos from "./pages/CadastroEstacionamentos";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />

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

        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
