import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./layouts/home/Home";
import { Login } from "./layouts/Login/Login";
import { Provider, useDispatch } from "react-redux";
import store from "./store/index";
import { Gallery } from "./layouts/Gallery/Gallery";
import { Memrise } from "./layouts/Memrise/Memrise";
import { tokenAuth } from "./config/tokenAuth";
import { getAuth } from "./store/slices/Menu/Menu";

function App() {
  const token = sessionStorage.getItem("token");
  if (token) tokenAuth(token);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home/gallery" element={<Gallery />} />
          <Route path="/home/memrise" element={<Memrise />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
