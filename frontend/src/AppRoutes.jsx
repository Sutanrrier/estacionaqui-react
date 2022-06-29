import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Testes from "./pages/Testes";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="teste" element={<Testes />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
