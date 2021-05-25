const router = require("express").Router();
const Getplayer = require("../tools/getplayer");

router.put("/:id", Getplayer, async (req, res) => {
  if (req.body.username != null) {
    res.jugador.username = req.body.username;
  }
  if (req.body.room != null) {
    res.jugador.room = req.body.room;
  }
  try {
    const updatedJugador = await res.jugador.save();
    res.json(updatedJugador);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
