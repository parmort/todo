"use strict";
exports.__esModule = true;
var pg_1 = require("pg");
exports["default"] = new pg_1.Pool({
    host: 'localhost',
    user: 'nolan',
    database: 'todo',
    port: 5432
});
