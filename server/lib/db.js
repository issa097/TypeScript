"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pool = require("pg").Pool;
require("dotenv").config();
var pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.PORT_DB,
    database: process.env.DATABASE,
});
exports.default = {
    query: function (text, params) { return pool.query(text, params); },
};
