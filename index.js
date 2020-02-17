const express = require("express");
const routes = require("./router/routeTest");
const reportsSchema = require("./model/reportsModel");
const Reports = require("./model/reportsModel")
const reportsRoute = require("./router/reportRouter")
let app = express();


app.use('api/reports', reportsRoute)

// mongooseConnect.connection
app.listen(3000, () => {
    console.log("App listening on port 3000!");
});