import { useState } from "react";
import logo from "../../../assets/imagenes/UAO.svg";
import logopn from "../../../assets/imagenes/logo.png";

export default function App(props) {
  const [username, setUsername] = useState(null);
  const [team, setTeam] = useState(null);
  return (
    <div>
      <img className="uao" src={logo} alt="logo" />
      <div className="containerLogo">
        {" "}
        <img src={logopn} alt="logo_png" />
      </div>
      <div className="join-container">
        <div className="join-main">
          <form className="form">
            <div className="form-control">
              <label htmlFor="username"> Usuario</label>
              <input
                onChange={(event) => {
                  console.log(event);
                  setUsername(event.target.value);
                }}
                type="text"
                name="username"
                id="username"
                placeholder="Ingrese su usuario..."
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="room">Equipo</label>
              <select
                name="room"
                id="room"
                onChange={(event) => {
                  setTeam(event.target.value);
                }}
              >
                <option value="rojo">Equipo rojo</option>
                <option value="amarillo">Equipo Amarillo</option>
                <option value="blanco">Equipo Blanco</option>
                <option value="azul">Equipo Azul</option>
                <option value="negro">Equipo Negro</option>
              </select>
            </div>
            <button
              id="login-gerente"
              type="button"
              className="btn"
              onClick={() => {
                if (team !== null && username !== null) {
                  props.history.push("/Manager");
                  localStorage.setItem(
                    "userdata",
                    JSON.stringify({ team, username })
                  );
                }
              }}
            >
              Gerente
            </button>
            <button
              id="login-mecanico"
              type="button"
              className="btn"
              onClick={() => {}}
            >
              Mecanico
            </button>
            <button
              id="login-capitan"
              type="button"
              className="btn"
              onClick={() => {}}
            >
              Capitan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
