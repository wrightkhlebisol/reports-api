const express = require("express");
const routes = require("./router/routeTest");
const reportsSchema = require("./model/reportsModel");
const Reports = require("./model/reportsModel")
const reportsRoute = require("./router/reportRouter")
let app = express();

app.use('/api', reportsRoute)

let port = 3000;
app.listen(port, () => {
    console.log(`Listening on port ${port}!`);
});