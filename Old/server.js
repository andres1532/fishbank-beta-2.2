require("dotenv").config();

const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");
var bodyParser = require("body-parser");

const mongoose = require("mongoose");

const formatMessage = require("./utils/messages");
const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
} = require("./utils/users");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// Set static folder
app.use(express.static(path.join(__dirname, "public")));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

//base de datos
mongoose.connect(
  "mongodb+srv://dbuser:5hQZnxreYflxsILB@cluster0.79fkm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("connected to database"));

app.use(express.json());

const jugadoresRouter = require("./routes/jugadores");
app.use("/jugadores", jugadoresRouter);

// fin base de datos

const botName = "admin";

// Run when client connects
io.on("connection", (socket) => {
  socket.on("joinRoom", ({ username, room }) => {
    const user = userJoin(socket.id, username, room);

    socket.join(user.room);

    // Welcome current user
    socket.emit(
      "message",
      formatMessage(botName, `bienvenido al chat! ${user.username}`)
    );

    // Broadcast when a user connects
    socket.broadcast
      .to(user.room)
      .emit(
        "message",
        formatMessage(botName, `${user.username} Se ha unido al chat`)
      );

    // Send users and room info
    io.to(user.room).emit("roomUsers", {
      room: user.room,
      users: getRoomUsers(user.room),
    });
  });

  // Listen for chatMessage
  socket.on("chatMessage", (msg) => {
    const user = getCurrentUser(socket.id);

    io.to(user.room).emit("message", formatMessage(user.username, msg));
  });

  //listen for solicitud
  socket.on("solicitud", (cantidad) => {
    const user = getCurrentUser(socket.id);
    socket.broadcast.emit(
      "message",
      formatMessage(
        botName,
        `el mecanico (${user.username}) necesita ${cantidad}`
      )
    );
    socket.emit(
      "message",
      formatMessage(botName, `has solicitado ${cantidad}`)
    );
  });

  //listen for enviar
  socket.on("envio", (cantidad2) => {
    const user = getCurrentUser(socket.id);
    socket.broadcast.emit(
      "message",
      formatMessage(
        botName,
        `el gerente(${user.username}) ha enviado ${cantidad2}`
      )
    );
    socket.emit("message", formatMessage(botName, `has enviado ${cantidad2}`));
  });

  // Runs when client disconnects
  socket.on("disconnect", () => {
    const user = userLeave(socket.id);

    if (user) {
      io.to(user.room).emit(
        "message",
        formatMessage(botName, `${user.username} has left the chat`)
      );

      // Send users and room info
      io.to(user.room).emit("roomUsers", {
        room: user.room,
        users: getRoomUsers(user.room),
      });
    }
  });
});

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
