import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/home/Home";
import { Login } from "./components/Login/Login";
import { Provider } from "react-redux";
import store from "./store/index";
import { Gallery } from "./components/Gallery/Gallery";
import { Memrise } from "./components/Memrise/Memrise";
function App() {
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
