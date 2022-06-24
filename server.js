/////////////////////////////////
// DEPENDENCIES
////////////////////////////////
require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const router = require('./controllers/createdGames.js')
const { PORT = 4000, MONGODB_URL } = process.env;
const express = require("express");
const app = express();
const mongoose = require("mongoose"); 



///////////////////////////////
// DATABASE CONNECTION
////////////////////////////////
// Establish Connection
mongoose.connect(MONGODB_URL);

// Connection Events
mongoose.connection
.on('connected', () => {
    console.log('connected to MongoDB.')
})
.on('error', (err) => {
    console.log('Error with MongoDB: ' + err.message)
});


///////////////////////////////
// MiddleWare
////////////////////////////////
app.use(cors()); // to prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging
app.use(express.json()); // parse json bodies
app.use('/', router);


///////////////////////////////
// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));