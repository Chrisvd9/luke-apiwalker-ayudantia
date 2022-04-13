const mongoose=require('mongoose');

const PlayerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        minlength: [3, 'El nombre debe contener al menos 3 caracteres']
    },
    position: {
        type: String,
        required: [true, 'El jugador debe tener una posición']
    },
    status1: {
        type: String,
        default: 'Jugando'
    },
    status2: {
        type: String,
        default: 'Indeciso'
    },
    status3: {
        type: String,
        default: 'Nada'
    }
}, {timestamps: true});

const Player = mongoose.model("Player", PlayerSchema);

module.exports = Player;