import { Todo } from "../models/todo.model";

class TodoRepository {
  async getAllTodos() {
    return await Todo.find();
  }

  async createTodo(title: string, tags: string[]) {
    return await Todo.create({
      title,
      completed: false,
      tags,
    });
  }
}

export default TodoRepository;
