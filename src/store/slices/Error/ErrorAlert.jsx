import { createSlice } from "@reduxjs/toolkit";

export const errorSlice = createSlice({
  name: "Error",

  initialState: {
    error: false,
    msg: null,
  },
  reducers: {
    setError: (state, action) => {
      state.error = true;
      state.msg = action.payload;
    },
    hideError: (state, action) => {
      state.error = false;
      state.msg = null;
    },
  },
});

export default errorSlice.reducer;
export const { setError, hideError } = errorSlice.actions;

export const sendAlert = (msg) => (dispatch) => {
  dispatch(setError(msg));

  setTimeout(() => {
    dispatch(hideError());
  }, 5000);
};
