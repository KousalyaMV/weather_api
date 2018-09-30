"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const express = require("express");
const routes_1 = require("./routes/routes");
const bodyParser = require("body-parser");
const path = require("path");
class weatherapi {
    constructor() {
        this.routePrv = new routes_1.Routes();
        this.createApp();
        this.config();
        this.createServer();
        this.listen();
        this.routePrv.routes(this.expressApp);
    }
    createApp() {
        this.expressApp = express();
    }
    createServer() {
        this.server = http.createServer(this.expressApp);
    }
    config() {
        this.port = process.env.port || weatherapi.PORT;
        this.expressApp.set('view engine', 'ejs');
        this.expressApp.set('views', path.join(__dirname, '../../client/views'));
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: false }));
        // serving static files
        this.expressApp.use(express.static(path.join(__dirname, '../../client')));
    }
    listen() {
        this.server.listen(this.port, () => {
            console.log("Running Live Weather on port %s", this.port);
        });
    }
    getApp() {
        return this.expressApp;
    }
}
weatherapi.PORT = 8080;
exports.weatherapi = weatherapi;
