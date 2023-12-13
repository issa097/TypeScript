// studentController.ts
import { Request, Response } from "express";
import * as studentModel from "../moduls/student";

export const createStudent = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { name, age, grade } = req.body;
    const newStudent = await studentModel.createStudent(name, age, grade);

    res.status(201).json(newStudent);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const getStudent = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const getStudents = await studentModel.getStudents();

    res.status(201).json(getStudents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const getStudentid = async (
  req: Request,
  res: Response
): Promise<void> => {

  try {
  const id:number|string = req.params.id;
    
    const getStudents = await studentModel.getStudentid(parseInt(id));

    res.status(201).json(getStudents);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
