"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// studentRouter.ts
var express = require("express");
var studentController = require("../controller/studentController");
var router = express.Router();
router.post("/students", studentController.createStudent);
router.get("/getStudent", studentController.getStudent);
router.get("/getStudent/:id", studentController.getStudentid);
exports.default = router;
