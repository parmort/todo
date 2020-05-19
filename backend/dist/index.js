"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var routes_1 = __importDefault(require("./routes"));
var app = express_1["default"]();
var PORT = 3000;
app.use(body_parser_1["default"].json());
app.use(cors_1["default"]());
routes_1["default"](app);
app.listen(PORT, function () { return console.log("Server started on port " + PORT); });
