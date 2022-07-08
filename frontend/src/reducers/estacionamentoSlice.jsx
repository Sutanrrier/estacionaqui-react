import { createSlice } from "@reduxjs/toolkit";

export const estacionamentoSlice = createSlice({
  name: "estacionamento",
  initialState: {
    id: "",
    nome: "",
    dataCriacao: "",
  },
  reducers: {
    estacionamentoAtualAtivo: (state, action) => {
      state.id = action.payload.id;
      state.nome = action.payload.nome;
      state.dataCriacao = action.payload.dataCriacao;
    },
  },
});

export const { estacionamentoAtualAtivo } = estacionamentoSlice.actions;

export default estacionamentoSlice.reducer;
