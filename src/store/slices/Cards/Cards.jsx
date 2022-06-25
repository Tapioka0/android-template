import { createSlice } from "@reduxjs/toolkit";
import { clientAxios } from "../../../config/clientAxios";
import swal from "sweetalert";

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
  try {
    const response = await clientAxios.post("/api/card", data);
    if (response.status === 200)
      swal({
        title: "Sucess!",
        text: "Targeta agregada!",
        icon: "success",
      });
    else
      swal({
        title: "Error?",
        text: "Hubo un error!",
        icon: "warning",
        dangerMode: true,
      });
  } catch (e) {
    console.log(e);
    swal({
      title: "Error?",
      text: "Hubo un error!",
      icon: "error",
      dangerMode: true,
    });
  }
};
