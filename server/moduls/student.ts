// studentModel.ts

import db from "../lib/db";

export interface Student {
  id: number;
  name: string;
  age: number;
  grade: number;
}

export const createStudent = async (
  name: string,
  age: number,
  grade: number
): Promise<Student> => {
  const query =
    "INSERT INTO student (name, age, grade) VALUES ($1, $2, $3) RETURNING *";
  const values = [name, age, grade];

  const result = await db.query(query, values);
  return result.rows[0];
};

export const getStudents = async (): Promise<Student[]> => {
  return db.query("SELECT * FROM student WHERE is_deleted = false",undefined);
};
export const getStudentid = async (id: number): Promise<Student | null> => {
    const result = await db.query(
      "SELECT * FROM student WHERE id = $1 AND is_deleted = false",
      [id]
    );
  
    return result.rows.length > 0 ? result.rows[0] : null;
  };

  
