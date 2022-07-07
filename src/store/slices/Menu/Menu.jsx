import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useCallback } from "react";
import swal from "sweetalert";
import { clientAxios } from "../../../config/clientAxios";
import { tokenAuth } from "../../../config/tokenAuth";

export const menuSlice = createSlice({
  name: "Menu",

  initialState: {
    background: "",
    gallery: [],
    login: false,
    name: "",
  },
  reducers: {
    setBackground: (state, action) => {
      state.background = action.payload;
    },

    setGallery: (state, action) => {
      state.gallery = action.payload;
    },

    setLogin: (state, action) => {
      state.login = true;
    },
    setNoLogin: (state, action) => {
      state.login = false;
    },
    setName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export default menuSlice.reducer;
export const { setBackground, setLogin, setNoLogin, setName, setGallery } =
  menuSlice.actions;

export const changeBackground = () => async (dispatch) => {
  try {
    const response = await clientAxios("/api/extra/wallpaper");
    console.log(response.data);
    dispatch(setBackground(response.data.msg));
  } catch (e) {
    console.log(e);
  }
};

export const uploadImgToGallery = (img) => async (dispatch) => {
  try {
    const response = await clientAxios.post("/api/extra/gallery", { src: img });

    swal({
      title: "Sucess!",
      text: "Imagen agregada!",
      icon: "success",
    });
  } catch (e) {
    console.log(e);
  }
};

export const getImgToGallery = () => async (dispatch) => {
  try {
    const response = await clientAxios("/api/extra/gallery");

    dispatch(setGallery(response.data.img));
  } catch (e) {
    console.log(e);
  }
};

export const auth = (data) => async (dispatch) => {
  try {
    const response = await clientAxios.post("/api/auth", data);
    sessionStorage.setItem("token", response.data.token);
    dispatch(setLogin());
  } catch (e) {
    //  console.log(e);
    sessionStorage.removeItem("token");
    dispatch(setNoLogin());
  }
};

export const getAuth = () => async (dispatch) => {
  const token = sessionStorage.getItem("token");
  if (token) tokenAuth(token);
  try {
    const response = await clientAxios("/api/auth");

    dispatch(setLogin());
    dispatch(setName(response.data.nombre));
  } catch (e) {
    // console.log(e);
    sessionStorage.removeItem("token");
    dispatch(setNoLogin());
  }
};
