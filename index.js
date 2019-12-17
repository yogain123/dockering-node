const express = require('express');
var app = express();
var cors = require('cors');
app.use(cors());
const bodyParser = require('body-parser');
const port = process.env.PORT || 4444;
const connectDB = require('./config/db');
const path = require('path');

connectDB();

var routing = require("./routing");

app.set('view engine', 'pug');

//app.use(express.static(path.join(__dirname, 'public'))); //  "public" off of current is root

console.log("loggin");

app.use(bodyParser.json());

app.use('/', routing);
app.listen(port);