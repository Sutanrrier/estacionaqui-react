import { createSlice } from "@reduxjs/toolkit";

export const listaEstacionamentoSlice = createSlice({
  name: "listaEstacionamentos",
  initialState: {
    lista: [],
  },
  reducers: {
    listarTodosEstacionamentos: (state, action) => {
      state.lista = action.payload;
    },
  },
});

export const { listarTodosEstacionamentos } = listaEstacionamentoSlice.actions;

export default listaEstacionamentoSlice.reducer;
