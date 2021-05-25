const router = require("express").Router();
const Jugador = require("../../models/index");
router.post("/", async (req, res) => {
  console.log(req.body.username);
  const jugador = new Jugador({
    username: req.body.username,
    room: req.body.room,
  });
  try {
    const newJugador = await jugador.save();
    res.status(201).json(newJugador);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
