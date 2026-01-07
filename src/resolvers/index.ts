import TodoRepository from "../repositories/todo.repository";
import TodoService from "../services/todo.service";

const todoRepository = new TodoRepository();
const todoService = new TodoService(todoRepository);

const resolvers = {
  Query: {
    getTodos: () => todoService.getAllTodos(),
  },
  Mutation: {
    createTodo: (
      _: any,
      args: { title: string; tags: string[] },
      context: { token: string }
    ) => todoService.createTodo(args.title, args.tags, context.token),
  },
};

export default resolvers;
