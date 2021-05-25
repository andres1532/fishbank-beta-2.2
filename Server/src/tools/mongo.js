const mongoose = require("mongoose");
//base de datos
mongoose.connect(
  process.env.DATABASE_URL ||
    "mongodb+srv://dbuser:5hQZnxreYflxsILB@cluster0.79fkm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", //cambia esta linea
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("connected to database"));

module.exports = db;
