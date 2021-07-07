import { useEffect, useState } from "react";
import io from "socket.io-client";

//css
import "../Manager/manager.css";
import "./style.css";
import "./tabla.css";
import "./chat.css";

//imgs
import UAO2 from "../../../assets/imagenes/UAO2.svg";
import User from "../../../assets/imagenes/user.svg";
import LogOut from "../../../assets/imagenes/Cerrar sesión.svg";
import Clock from "../../../assets/imagenes/clock.svg";
import Money from "../../../assets/imagenes/money.svg";

//cambiar dd por Localstorage
//cambiar ff por object

export default function App(props) {
  const Localstorage = localStorage.getItem("userdata");
  const object = JSON.parse(Localstorage);

  const [mecanico, setMecanicos ] = useState({});
  const [money, setMoney] = useState(0);
  const [giro, setGiro] = useState(0);

  let state = {
    socket: null,
  };

  
  useEffect(() => {
    const logs = () => {
      let totalSeconds = 0;

      const chatMessages = document.querySelector(".chat-messages");
      const minutesLabel = document.getElementById("minutes");
      const secondsLabel = document.getElementById("seconds");
      const roomName = document.getElementById("room-name");
      const userList = document.getElementById("users");
      const setTime = () => {
        ++totalSeconds;
        secondsLabel.innerHTML = pad(totalSeconds % 60);
        minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
      };
      const pad = (val) => {
        var valString = val + "";
        if (valString.length < 2) {
          return "0" + valString;
        } else {
          return valString;
        }
      };
      setInterval(setTime, 1000);

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
        rol: "Gerente",
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

      state.socket.on("mechanic", (mechanic) => {
        console.log(mechanic);
        setMecanicos(mechanic);
      })

      state.socket.on("autoGiro", (autoGiro) =>{
        console.log(autoGiro);
        setMoney(autoGiro);
      })


      
    };
    logs();

    // Get room and users
  });

  const enviarForm = (e) => {
    e.preventDefault();

    //get message text
    const cantidad2 = e.target.elements.cantidad2.value;

    //emit message to server
   // state.socket.emit("envio", cantidad2);

    //clear input
    e.target.elements.cantidad2.value = "";
    e.target.elements.cantidad2.focus();
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

  const handleMoney = () => {
    state.socket.emit("GirarDinero", {user: mecanico.user, money: parseInt(giro)}) 
  };

  return (
    <div>
      <div>
        <title>Gerente</title>

      </div>

      <div className="o-Navbar">
        <ul className="o-NavbarElements">
          <li className="o-title"><h1>UAO</h1></li>
          <li className="Indicador">
            <div><label>$ <span id="Dinero">{money}</span></label></div>
            <p>Dinero Actual</p>
          </li>
          <li className="Indicador">
            <div className="tiempo">
              <label id="minutes">00</label>
              <label id="colon">:</label>
              <label id="seconds">00</label>
              <p>Tiempo</p>
            </div>
          </li>
          <li className="o-NameAndPosition">{object.username}<br />Gerente</li>
          <div className="o-UserMenu">
            <li className="o-UserImage"><a><img src={User} alt="imgUser" /></a>
              <div className="o-UserContent">
                <a>Cerrar sesion</a>
              </div>
            </li>
          </div>
        </ul>

      </div>




      <div className="chat-container" style={{ float: "right" }}>
        <header className="chat-header">
        <button onClick={() => props.history.push('/Login')}>
            Leave Room
          </button>
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
              autoComplete="off"
            />
            <button className="btn-enviar">
              <i className="fas fa-paper-plane"></i> Envia un mensaje
            </button>
          </form>

          <form
            id="enviar-form"
            onSubmit={(event) => {
              enviarForm(event);
            }}
          >
            <input
              id="cantidad2"
              type="number"
              placeholder="Envia un valor"
              autoComplete="off"
             defaultValue={0}
              onChange={e => {setGiro(e.target.value)}}
            />
            <button className="btn" onClick={handleMoney}>
              <i className="fas fa-paper-plane"></i> Envia un valor
            </button>
          </form>
        </div>
      </div>
      <div className="graficas">
        <div className="flexwrap-2">
          <div className="flexwrap-1">
            <canvas id="lineChart1" style={{ background: " #787878" }}></canvas>
            <canvas id="lineChart2" style={{ background: " #787878" }}></canvas>
          </div>
        </div>
      </div>

      <canvas id="lineChart3" style={{ background: " #787878" }}></canvas>
      <canvas id="lineChart4" style={{ background: " #787878" }}></canvas>
      <canvas id="lineChart5" style={{ background: " #787878" }}></canvas>
    </div>
  );
}
