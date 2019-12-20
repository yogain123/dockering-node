const express = require("express");
var app = express();
var cors = require("cors");
app.use(cors());
const bodyParser = require("body-parser");
const port = process.env.PORT || 4444;
const connectDB = require("./config/db");
const path = require("path");
var favicon = require('serve-favicon')
require("dotenv").config();
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))


// Adding Bugsnag Starts --------------------------------------
var bugsnag = require('@bugsnag/js')
var bugsnagExpress = require('@bugsnag/plugin-express')
var bugsnagClient = bugsnag('fakekey123454321!!!!!!!')
bugsnagClient.use(bugsnagExpress)
var middleware = bugsnagClient.getPlugin('express')
app.use(middleware.requestHandler)

bugsnagClient.notify(new Error('Test error Yogendra')) // just for testin purpose

// Adding Bugsnag Starts --------------------------------------

connectDB();

var routing = require("./routing");

app.set("view engine", "pug");

//app.use(express.static(path.join(__dirname, 'public'))); //  "public" off of current is root

app.use(bodyParser.json());

app.use("/", routing);

app.use(middleware.errorHandler) // Bugsnag Middleware Should be put at last of all routes and middleware

app.listen(port);
