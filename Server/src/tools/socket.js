const chalk = require("chalk");
const http = require("./httpx");
const io = require("socket.io")(http, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
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
  console.log(chalk.green(`entro el usuario ${socket.id}`));
  socket.on("joinRoom", ({ username, room, rol }) => {
    console.log(chalk.blue(username) + "----" + chalk.blue(room));
    socket.room = room;
    socket.name = username;
    socket.roluser = rol;
    const user = userJoin(socket.id, username, room);

    socket.join(user.room);

    


    // Welcome current user
    socket.emit(
      "welcomeMessage",
      formatMessage(botName, `bienvenido al chat! ${user.username}`),
      console.log("welcome message")
    );

    //entró un manager
    if(socket.roluser === "Gerente"){
      console.log("entró un gerente");
      io.to(socket.room).emit(
        "manager",
        {room: socket.room,
         user: socket.id,
        name: socket.name,
        rol: socket.roluser}
              )
            io.to(socket.id).emit("autoGiro", 500)
            console.log("autogiro")
            };
    
    //entró un mecanico
    if(socket.roluser === "Mecanico"){
      console.log("entró un Mecanico");
      io.to(socket.room).emit(
        "mechanic",
        {room: socket.room,
          user: socket.id,
         name: socket.name,
        rol: socket.roluser}
              )};

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

  //con este evento se tienen que manejar los pagos
  socket.on("pay", (pay) => {
    io.on(socket.room).emit("pay", pay);
  })  

  socket.on("GirarDinero", ({user, money}) => {
    try {
    console.log(user, money);  
    io.to(user).emit("GirarDinero", money);

    } catch (error) {
      console.log(error);  
    }
    
  })  

  // Listen for chatMessage
  socket.on("chatMessage", (msg) => {
    const user = getCurrentUser(socket.id);

    io.in(socket.room).emit("message", formatMessage(socket.name, msg));
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

/*Para juego en colaborativo/competitivo

function getuserroom(room) {
  const nsp = io.of("/");
  const rooms = nsp.adapter.rooms.get(room);
  let list = [];
  for (const clientId of rooms) {
    const clientSocket = io.sockets.sockets.get(clientId);
    //console.log(clientSocket);
    list.push({
      id: clientSocket.id,
      nombre: clientSocket.name,
      rol: clientSocket.roluser,
    });
  }

  return list;
}*/

