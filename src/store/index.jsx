import { configureStore } from "@reduxjs/toolkit";
import menu from "./slices/Menu/Menu";
export default configureStore({
  reducer: { menu },
});
