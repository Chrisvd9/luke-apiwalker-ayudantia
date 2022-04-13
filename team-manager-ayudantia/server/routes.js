const PlayerController = require('../server/controllers/player.controller')

module.exports = app => {
    app.post("/api/players/new", PlayerController.createNewPlayer);
    app.get("/api/players", PlayerController.findAllPlayers);
    app.get("/api/players/:id", PlayerController.getPlayer);
    app.put("/api/players/update/:id", PlayerController.updatePlayer);
    app.delete("/api/players/delete/:id", PlayerController.deletePlayer);
}