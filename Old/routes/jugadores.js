const express = require('express')
const router = express.Router()
const Jugador = require('../model/jugador')

//getting all
router.get('/', async(req, res) => {
   try {
        const jugadores = await Jugador.find();
        console.log(jugadores);
     //   res.json({text: 'esperando'});
       res.json(jugadores);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }

    
});

//get one
router.get('/:id',  async(req, res) => {
    try {
        const jugadores = await Jugador.find({_id: req.params.id});
        console.log(jugadores);
     // res.json({text: 'individual'});
      res.json(jugadores);
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
});


//post one
router.post('/', async(req, res) => {
    console.log(req.body.username);
    const jugador = new Jugador({
        username: req.body.username,
        room: req.body.room
    })
    try {
        const newJugador = await jugador.save()
        res.status(201).json(newJugador)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
    res.render('public/Gerente', {
        username: jugador.username,
        room: jugador.room
    });
    res.end();
});

//update one
router.patch('/:id', getJugador, async(req, res) => {
    if (req.body.username != null) {
        res.jugador.username = req.body.username
    }
    if (req.body.room != null) {
        res.jugador.room = req.body.room
    }
    try {
        const updatedJugador = await res.jugador.save()
        res.json(updatedJugador)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

//delete one
router.delete('/:id', getJugador, async(req, res) => {
    try {
        await res.jugador.remove()
        res.json({ message: 'Deleted user' })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})


//
async function getJugador(req, res, next) {
    let jugador
    try {
        jugador = await Jugador.findById(req.params.id)
        if (jugador == null) {
            return res.status(404).json({ message: 'Cannot find jugador' })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.jugador = jugador
    next()
}

module.exports = router