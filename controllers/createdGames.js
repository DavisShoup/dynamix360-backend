///////////////////////////////
// ROUTES
////////////////////////////////
const express = require("express");
const router = express.Router();
const { Router } = require("express");
const createGame = require('../models/createGame.js')

router.get("/", async (req,res) => {
  res.send('Hellllllooooo')
})

// Games INDEX ROUTE
router.get("/game", async (req, res) => {
    try {
      // send all people
    res.json(await createGame.find({}));
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });

// Games CREATE ROUTE
router.post("/game", async (req, res) => {
    try {
      // send all createGame
      res.json(await createGame.create(req.body));
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });

  // Games DELETE ROUTE
router.delete("/game/:id", async (req, res) => {
    try {
      // send all create
      res.json(await createGame.findByIdAndRemove(req.params.id));
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });

// Games UPDATE ROUTE
router.put("/game/:id", async (req, res) => {
    try {
      // send all create
      res.json(
        await createGame.findByIdAndUpdate(req.params.id, req.body, { new: true })
      );
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });

module.exports = router;