const mongoose = require('mongoose');
///////////////////////////////
// MODELS
////////////////////////////////
const createGameSchema = new mongoose.Schema({
    name: String,
    sport: String,
    difficulty: String,
    location: String,
    date: Number,
    time: Number,
    description: String,
});

const createGame = mongoose.model("Create", createGameSchema);

module.exports = createGame;