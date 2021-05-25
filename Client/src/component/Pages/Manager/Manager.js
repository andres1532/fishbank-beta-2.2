import { useEffect } from "react";
import io from "socket.io-client";
//css
import "./manager.css";
//imgs
import UAO2 from "../../../assets/imagenes/UAO2.svg";
import User from "../../../assets/imagenes/user.svg";
import LogOut from "../../../assets/imagenes/Cerrar sesión.svg";
import Clock from "../../../assets/imagenes/clock.svg";
import Money from "../../../assets/imagenes/money.svg";
export default function App() {
  const dd = localStorage.getItem("userdata");
  const ff = JSON.parse(dd);
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
        username: ff.username,
        room: ff.team,
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

  const enviarForm = (e) => {
    e.preventDefault();

    //get message text
    const cantidad2 = e.target.elements.cantidad2.value;

    //emit message to server
    state.socket.emit("envio", cantidad2);

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
  return (
    <div>
      <header className="encabezado">
        <img className="uao-2" src={UAO2} alt="" />
        <img className="usericon" src={User} alt="" />

        <a className="sesionIcon" href="/">
          {" "}
          <img src={LogOut} alt="" />
        </a>
      </header>

      <div className="icono">
        <div className="sub-icono">
          <div className="wrapflex-tempo">
            <div className="timeIcon">
              <img className="time" src={Clock} alt="" />
            </div>
            <div className="tiempo">
              <label id="minutes">00</label>
              <label id="colon">:</label>
              <label id="seconds">00</label>
            </div>
          </div>
          <div className="wrapflex-dinero">
            <div className="moneyIcon">
              <img className="money" src={Money} alt="" />
            </div>
            <div>
              <label id="dinero">$500</label>
            </div>
          </div>
        </div>
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
              <i className="fas fa-paper-plane"></i> Send
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
              required
              autocomplete="off"
            />

            <button className="btn">
              <i className="fas fa-paper-plane"></i>
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
