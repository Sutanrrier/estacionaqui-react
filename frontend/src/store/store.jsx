import { configureStore } from "@reduxjs/toolkit";

import carReducer from "../reducers/carSlice";
import estacionamentoReducer from "../reducers/estacionamentoSlice";
import listaEstacionamentoReducer from "../reducers/listaEstacionamentoSlice";

export default configureStore({
  reducer: {
    carro: carReducer,
    estacionamento: estacionamentoReducer,
    listaEstacionamentos: listaEstacionamentoReducer,
  },
});
