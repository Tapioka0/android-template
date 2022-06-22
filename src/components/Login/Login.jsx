import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  // const navigate = useNavigate();

  const [usuario, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = usuario;
  const onChangee = (e) => {
    setUser({ ...usuario, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {};

  return (
    <div className="form-usuario">
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
