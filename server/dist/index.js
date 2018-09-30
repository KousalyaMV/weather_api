"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
let listening = new server_1.weatherapi().getApp();
exports.listening = listening;
