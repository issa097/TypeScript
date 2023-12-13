// studentRouter.ts
import * as express from "express";
import * as studentController from "../controller/studentController";

const router = express.Router();

router.post("/students", studentController.createStudent);
router.get("/getStudent", studentController.getStudent);
router.get("/getStudent/:id", studentController.getStudentid);

export default router;
