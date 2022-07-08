import { createSlice } from "@reduxjs/toolkit";

export const carSlice = createSlice({
  name: "carro",
  initialState: {
    id: "",
    cor: "",
    placa: "",
    velocidademax: "",
    dataCriacao: "",
    estacionamento: {
      nome: "",
    },
  },
  reducers: {
    carroAtualAtivo: (state, action) => {
      state.id = action.payload.id;
      state.cor = action.payload.cor;
      state.placa = action.payload.placa;
      state.velocidademax = action.payload.velocidademax;
      state.dataCriacao = action.payload.dataCriacao;
      state.estacionamento.nome = action.payload.estacionamento.nome;
    },
  },
});

export const { carroAtualAtivo } = carSlice.actions;

export default carSlice.reducer;
