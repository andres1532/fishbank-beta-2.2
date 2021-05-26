import { useEffect, useState } from "react";
import io from "socket.io-client";
//css
import "./mechanic.css";
//imgs
import UAO2 from "../../../assets/imagenes/UAO2.svg";
import User from "../../../assets/imagenes/user.svg";
import LogOut from "../../../assets/imagenes/Cerrar sesión.svg";
import Clock from "../../../assets/imagenes/clock.svg";
import Money from "../../../assets/imagenes/money.svg";
import Ship from "../../../assets/imagenes/barco.svg";

export default function App() {
  const Localstorage = localStorage.getItem("userdata");
  const object = JSON.parse(Localstorage);
  const [ship, setShip] = useState([{level:1,price:100, gas:100, capacity:100}, {level:1,price:100, gas:100, capacity:100}, {level:1, price:100, capacity:100}]);
  const [money, setMoney] = useState(0);
  
  let state = {
    socket: null,
    priceship: 100,

  };
  useEffect(() => {

    const BuyShip = (money, price) => {
      if(money >= price){
        setShip.push({level:1, price:100, capacity:100});
      }
      else{
        alert("No tienes dinero suficiente para comprar barcos");
      }
    };

    const LevelUp = (money, level) => {
      /*if(){

      }*/
    }

  });

  return (
    <div>
      <div>
        <title>Mecanico</title>
        <link rel="stylesheet" href="/public/css/CSSMecanico.css" type="text/css" />
      </div>

      <ul>
        <li>
          <h1>UAO</h1>
        </li>
        <li className="IMG"><a><img src={User} alt="imgUser"/></a></li>
        <li className="NombreyCargo">{object.username}<br/>Mecanico</li>
        <li className="Indicador">
          <div className="tiempo">
            <label id="minutes">00</label>
            <label id="colon">:</label>
            <label id="seconds">00</label>
          </div>Tiempo
        </li>
        <li className="Indicador">
          <div><label>$ <span id="Dinero">{money}</span></label></div>Dinero Actual
        </li>
        <li className="IMG"><a><img id="ImgSalir" src={LogOut} alt="imgLogOut"/></a></li>
      </ul>

      <div className="ContenedorBotones">
        <button className="BtnComprarBarco"><img id="BtnComprarBarco"
            src={Ship} alt="imgShip"/></button><br/>
        <div className="Opciones">
          <a href="#"><img src={Ship} alt="imgShip"/></a>
          <a href="#"><img src={Ship} alt="imgShip"/></a>
        </div>
      </div>

      <h3>Valor Mejora</h3>
      <div className="Operaciones">
        <input id="ContenedorPantallaValor" name="PantallaPrecio" type="text"/>
        <button id="Pagar" name="BtnOperacion" onClick={()=>{}}>Pagar</button>
      </div>

      <div id="ContenedorMejoras">
        <h4>Precio Mejora</h4>
        <label id="BtnMejora" name="Mejora" value="100">$100</label>
        <label id="BtnMejora" name="Mejora" value="200">$200</label>
        <label id="BtnMejora" name="Mejora" value="300">$300</label>
        <label id="BtnMejora" name="Mejora" value="400">$400</label>
      </div>

      <div id="Barcos">
        <h5>Cantidad Barcos</h5>
        <label id="CantidadBarcos"></label>
        <br/>
        <button id="CompraBarco" onClick={()=>{}} value="100">CompraBarco</button>
        <br/>
        <br/>
        <table className="table-border">
          <tbody>
            <tr>
              <th>Barco Generico</th>
              <th>Barco Nivel 1</th>
              <th>Barco Nivel 2</th>
              <th>Barco Nivel 3</th>
              <th>Barco Nivel 4</th>
            </tr>
            <tr>
              <th id="BarcoGenerico">0</th>
              <th id="Nivel1">0</th>
              <th id="Nivel2">0</th>
              <th id="Nivel3">0</th>
              <th id="Nivel4">0</th>
            </tr>
          </tbody>
        </table>

      </div>

    </div>
  );


}
