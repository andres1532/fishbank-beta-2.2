import { useEffect, useState } from "react";
import io from "socket.io-client";
//css
import "./mechanic.css";
import "./style.css";
import "./chat.css";

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
  const [ship1, setShip1] = useState([{level:1,price:100, gas:100, capacity:100}, {level:1,price:100, gas:100, capacity:100}, {level:1, price:100, capacity:100}]);
  const [ship2, setShip2] = useState([]);
  const [ship3, setShip3] = useState([]);
  const [ship4, setShip4] = useState([]);
  const [money, setMoney] = useState(0);
  
  let state = {
    socket: null,
    priceship: 100,

  };
  useEffect(() => {
    const logs = () => {
      

    const chatMessages = document.querySelector(".chat-messages");
      //const minutesLabel = document.getElementById("minutes");
      //const secondsLabel = document.getElementById("seconds");
      const roomName = document.getElementById("room-name");
      const userList = document.getElementById("users");

    const BuyShip = (money, price, level) => {
      if(price == 100 && money >= price && level == 1){
        setShip1.push({level:1, price:100, capacity:100});
      }
      else{
        alert("No tienes dinero suficiente para comprar este barco");
      }

      if(price == 200 && money >= price && level == 2){
        setShip2.push({level:2, price:200, capacity:200});
      }
      else{
        alert("No tienes dinero suficiente para comprar este barco");
      }

      if(price == 300 && money >= price && level == 3){
        setShip3.push({level:3, price:300, capacity:300});
      }
      else{
        alert("No tienes dinero suficiente para comprar este barco");
      }

      if(price == 400 && money >= price && level == 4){
        setShip4.push({level:4, price:400, capacity:400});
      }
      else{
        alert("No tienes dinero suficiente para comprar este barco");
      }

    };

    const outputMessage = (message) => {
      const div = document.createElement("div");
      div.classList.add("message");
      const p = document.createElement("p");
      p.classList.add("meta");
      p.innerText = message.username;
      p.innerHTML += `<span>${message.time}</span>`;
      div.appendChild(p);
      const para = document.createElement("p");
      para.classList.add("text");
      para.innerText = message.text;
      div.appendChild(para);
      chatMessages.appendChild(div);
    };
    const outputUsers = (users) => {
      userList.innerHTML = "";
      users.forEach((user) => {
        const li = document.createElement("li");
        li.innerText = user.username;
        userList.appendChild(li);
      });
    };
    const outputRoomName = (room) => {
      roomName.innerText = room;
    };
    state.socket = io("http://localhost:3030/", {
      reconnectionDelayMax: 10000,
    });

    state.socket.emit("joinRoom", {
      username: object.username,
      room: object.team,
      rol: "admin",
    });
    state.socket.on("roomUsers", ({ room, users }) => {
      outputRoomName(room);
      outputUsers(users);
    });
    state.socket.on("message", (message) => {
      console.log(message);
      outputMessage(message);

      // Scroll down
      chatMessages.scrollTop = chatMessages.scrollHeight;
    });
    };
    logs();
  // Get room and users
});

const solicitarForm = (e) => {
  e.preventDefault();

  //get message text
  const cantidad = e.target.elements.cantidad.value;

  //emit message to server
  state.socket.emit("solicitud", cantidad);

  //clear input
  e.target.elements.cantidad.value = "";
  e.target.elements.cantidad.focus();

};

const chatF = (e) => {
  e.preventDefault();

  // Get message text
  let msg = e.target.elements.msg.value;

  msg = msg.trim();

  if (!msg) {
    return false;
  }

  // Emit message to server
  state.socket.emit("chatMessage", msg);

  // Clear input
  e.target.elements.msg.value = "";
  e.target.elements.msg.focus();
};

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

      <div className="chat-container" style={{ float: "right" }}>
        <header className="chat-header">
          <a href="index.html" className="btn-salir">
            Leave Room
          </a>
        </header>
        <main className="chat-main">
          <div className="chat-sidebar">
            <h3>
              <i className="fas fa-comments"></i> Room Name:
            </h3>
            <h2 id="room-name"></h2>
            <h3>
              <i className="fas fa-users"></i> Users
            </h3>
            <ul id="users"></ul>
          </div>

          <div className="chat-messages"></div>
        </main>
        <div className="chat-F-container">
          <form
            id="chatF"
            onSubmit={(e) => {
              chatF(e);
            }}
          >
            <input
              id="msg"
              type="text"
              placeholder="Enter Message"
              autocomplete="off"
            />
            <button className="btn-enviar">
              <i className="fas fa-paper-plane"></i> Enviar mensaje
            </button>
          </form>

          <form
            id="solicitar-form"
            onSubmit={(event) => {
              solicitarForm(event);
            }}
          >
            <input
              id="cantidad"
              type="number"
              placeholder="Envia un valor"
              required
              autocomplete="off"
            />

            <button className="btn">
              <i className="fas fa-paper-plane"></i> Solicitar Dinero
            </button>
          </form>
        </div>
      </div>

    </div>
  );


}
