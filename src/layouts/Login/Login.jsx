import { useState, useContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sendAlert } from "../../store/slices/Error/ErrorAlert";
import { Error } from "../../components/Error/Error";
import { auth, getAuth } from "../../store/slices/Menu/Menu";
export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Errors = useSelector((state) => state.error);
  const check = useSelector((state) => state.menu);
  const { login } = check;
  const { error, msg } = Errors;
  const [usuario, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = usuario;
  const onChangee = (e) => {
    setUser({ ...usuario, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "")
      return dispatch(sendAlert("Todos los campos son obligatorios"));
    dispatch(auth(usuario));
  };

  /// login
  useEffect(() => {
    dispatch(getAuth());
    if (login) navigate("/home", { replace: true });
  }, [login]);

  return (
    <div className="form-usuario">
      {error ? <Error msg={msg} /> : null}
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar Sesion</h1>

        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu email"
              onChange={onChangee}
              value={email}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu Password"
              onChange={onChangee}
              value={password}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Inicia Sesion"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
