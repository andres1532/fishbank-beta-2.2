const router = require("express").Router();
const Jugador = require("../../models/index");
//getting all
router.get("/", async (req, res) => {
  try {
    const jugadores = await Jugador.find();
    console.log(jugadores);
    //   res.json({text: 'esperando'});
    res.json(jugadores);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//get one
router.get("/:id", async (req, res) => {
  try {
    const jugadores = await Jugador.find({ _id: req.params.id });
    console.log(jugadores);
    // res.json({text: 'individual'});
    res.json(jugadores);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
