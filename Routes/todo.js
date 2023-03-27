import express from "express";

import {
  getAllTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todo.js";

const router = express.Router();

router.get("/getall-todo", getAllTodo);
router.post("/create-todo", createTodo);
router.patch("/update-todo/:id", updateTodo);
router.delete("/delete-todo/:id", deleteTodo);

export default router;
