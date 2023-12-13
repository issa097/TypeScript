"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts
var express = require("express");
var cors = require("cors");
var studentRouter_1 = require("./routs/studentRouter");
var port = process.env.LISTEN_PORT || 3000;
var app = express();
app.use(cors());
app.use(express.json());
app.use(studentRouter_1.default);
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
app.listen(port, function () {
    console.log("Server is running on port ".concat(port));
});
