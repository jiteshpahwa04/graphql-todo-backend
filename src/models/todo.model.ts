import mongoose from "mongoose";
import ITodo from "../types/todo";

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    default: false,
  },
  tags: {
    type: [String],
    default: [],
  },
});

export const Todo = mongoose.model<ITodo>("Todo", todoSchema);
