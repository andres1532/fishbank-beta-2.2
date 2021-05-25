const app = require("./tools/app");

var isWin = process.platform;
const socket = require("./tools/socket");

function inicio() {
  socket.listen(app.get("PORT"), () => {
    console.log(`El sistema se esta ejecutando en ${isWin}`);
    console.log(`El puerto usado es ${app.get("PORT")}`);
  });
}

inicio();
