"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const routemethod_1 = require("../controller/routemethod");
//import * as path from "path";
class Routes {
    constructor() {
        this.controller = new routemethod_1.WeatherController();
    }
    routes(app) {
        app.route('/')
            .get(this.controller.mainWeather);
        app.route('/weatherapi')
            .get(this.controller.getCityWeather);
    }
}
exports.Routes = Routes;
