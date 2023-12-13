// index.ts
import * as express from "express";
import * as cors from 'cors';
import studentRouter from "./routs/studentRouter";

const port = process.env.LISTEN_PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(studentRouter);

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
