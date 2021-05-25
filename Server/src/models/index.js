const mongoose = require("mongoose");

//login schema
const jugadorSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  room: {
    type: String,
    required: true,
  },
  Date: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = mongoose.model("Jugador", jugadorSchema);
