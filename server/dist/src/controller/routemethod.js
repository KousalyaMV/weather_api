"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("https");
class WeatherController {
    mainWeather(req, res) {
        res.render('index');
    }
    getCityWeather(req, res) {
        var options = {
            host: 'openweathermap.org',
            path: '/data/2.5/weather?q=bangalore&appid=b6907d289e10d714a6e88b30761fae22',
            method: 'GET'
        };
        let data = '';
        http.get(options, (wtres) => {
            wtres.on('data', (chunk) => {
                data += chunk;
            });
            wtres.on('end', () => {
                console.log(JSON.parse(data).main.temp);
                res.render('index');
            });
        });
    }
}
exports.WeatherController = WeatherController;
