import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./pages/App";
import Carros from "./pages/Carros";
import Estacionamentos from "./pages/Estacionamentos";
import ErrorPage from "./pages/ErrorPage";
import Navbar from "./components/Navbar";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/carros" element={<Carros />} />
        <Route path="/estacionamentos" element={<Estacionamentos />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
