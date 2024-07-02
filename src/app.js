const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const server = require('http').createServer(app);
const PORT = process.env.PORT || 8080;
const cors = require("cors");
var corsOptions = { origin: "*" };
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));





const homeRoutes = require('./routes/homeRoutes');
const path = require('path');
const v1 = '/api/v1'
app.use(v1,homeRoutes)

app.use(express.static('public'));
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
  });







module.exports = { PORT, server }


