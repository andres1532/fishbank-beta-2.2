const router = require("express").Router();
const Getplayer = require("../tools/getplayer");
router.delete("/:id", Getplayer, async (req, res) => {
  try {
    await res.jugador.remove();
    res.json({ message: "Deleted user" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
module.exports = router;
