const app = require('express')();
const bodyParser = require("body-parser");

const server = require('http').createServer(app);
const PORT = process.env.PORT || 8080;
const cors = require("cors");
var corsOptions = { origin: "*" };
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));





const homeRoutes = require('./routes/homeRoutes');
const v1 = '/api/v1'
app.use(v1,homeRoutes)










module.exports = { PORT, server }


