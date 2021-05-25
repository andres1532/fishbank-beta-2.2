const http = require("./httpx");
const io = require("socket.io")(http);
const moment = require("moment");

function formatMessage(username, text) {
  return {
    username,
    text,
    time: moment().format("h:mm a"),
  };
}
const users = [];

// Join user to chat
function userJoin(id, username, room) {
  const user = { id, username, room };

  users.push(user);

  return user;
}

// Get current user
function getCurrentUser(id) {
  return users.find((user) => user.id === id);
}
// User leaves chat
function userLeave(id) {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

// Get room users
function getRoomUsers(room) {
  return users.filter((user) => user.room === room);
}
const botName = "admin";
// Run when client connects
io.on("connection", (socket) => {
  console.log("entro algo");
  socket.on("joinRoom", ({ username, room }) => {
    socket.name = username;
    socket.room = room;
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

module.exports = http;
