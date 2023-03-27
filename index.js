import express from "express";
// import cors from "cors";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import TodoRouter from "./Routes/todo.js";

dotenv.config();
const PORT = process.env.PORT || 3001;
const uri = process.env.MONGODB_URI;

const app = express();

app.use(express.json());
// app.use(cors());

app.use("/api", TodoRouter);

mongoose
  .connect(uri)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on Port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`connection to MongoDB failed with error ${error.message}`);
  });
