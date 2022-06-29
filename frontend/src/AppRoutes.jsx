import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./pages/App";
import Carros from "./pages/Carros";
import Estacionamentos from "./pages/Estacionamentos";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="carros" element={<Carros />} />
        <Route path="estacionamentos" element={<Estacionamentos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
