"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var todo_1 = __importDefault(require("./todo"));
exports["default"] = (function (app) {
    app.get('/', function (_, res) { return res.send('Server is working'); });
    app.use('/todos', todo_1["default"]);
});
