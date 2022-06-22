import { configureStore } from "@reduxjs/toolkit";
import menu from "./slices/Menu/Menu";
import cards from "./slices/Cards/Cards";
import error from "./slices/Error/ErrorAlert";
export default configureStore({
  reducer: { menu, cards, error },
});
