import { createSlice } from "@reduxjs/toolkit";

export const cardSlice = createSlice({
  name: "Cards",

  initialState: {
    kanji: "",
    yomi: "",
    categoria: "",
    imi: "",
  },
  reducers: {
    addTargets: (state, action) => {
      state.kanji = action.payload.kanji;
      state.yomi = action.payload.yomi;
      state.categoria = action.payload.categoria;
      state.imi = action.payload.imi;
    },
  },
});

export default cardSlice.reducer;
export const { addTargets } = cardSlice.actions;

export const add = (data) => async (dispatch) => {
  dispatch(addTargets(data));
};
