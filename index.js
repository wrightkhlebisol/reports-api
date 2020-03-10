const express = require("express");
const mongoose = require("mongoose");
const Reports = require("./model/reportsModel");
const reportsRoute = require("./router/reportRouter");
require('./config/db');
require('dotenv').config();


let mongodbconnection = mongoose.connection;
mongodbconnection.on('error', console.error.bind(console, 'Mongodb conenction error: '));

let app = express();

app.use('/v1/api', reportsRoute);

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}!`);
});