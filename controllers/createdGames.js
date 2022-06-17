///////////////////////////////
// ROUTES
////////////////////////////////
const express = require("express");
const router = express.Router();
const { Router } = require("express");
const createGame = require('../models/createGame.js')

// Games INDEX ROUTE
router.get("/", (req, res) => {
    res.send("hello Dynamix");
}); 

// Games CREATE ROUTE
router.post('/:id', (req, res) => {
    createGame.findById(req.params.id, (error, foundGame) => {
        foundGame.push(req.body);
        foundGame.save();
    });
});

module.exports = router;