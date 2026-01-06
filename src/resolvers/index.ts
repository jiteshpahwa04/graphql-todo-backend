import TodoRepository from "../repositories/todo.repository";
import TodoService from "../services/todo.service";

const todoRepository = new TodoRepository();
const todoService = new TodoService(todoRepository);

const resolvers = {
  Query: {
    getTodos: todoService.getAllTodos,
  },
};

export default resolvers;
