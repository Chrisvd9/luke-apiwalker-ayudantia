const Player = require('../models/player.model')

module.exports.findAllPlayers = (req, res) => {
    Player.find()
        .then((allPlayers)=>res.json({players: allPlayers}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))
};

module.exports.createNewPlayer = (request, response) => {
    Player.create(request.body)
        .then((nuevoPlayer)=>response.json({players: nuevoPlayer}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))
};

module.exports.getPlayer = (req, res) => {
    Player.findOne({_id: req.params.id})
        .then((player)=>res.json({player: player}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))
};

module.exports.updatePlayer = (req, res) => {
    Player.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
        .then((player)=>res.json({player: player}))
        .catch((err)=>res.json({message:"Algo salio mal",error:err}))
}

module.exports.deletePlayer = (req, res) => {
    Player.deleteOne({_id: req.params.id})
        .then((result)=>res.json({resultado: result}))
        .catch((err)=>res.json({message:"Algo salio mal", error:err}))
}