module.exports = async function getJugador(req, res, next) {
  let jugador;
  try {
    jugador = await Jugador.findById(req.params.id);
    if (jugador == null) {
      return res.status(404).json({ message: "Cannot find jugador" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.jugador = jugador;
};
