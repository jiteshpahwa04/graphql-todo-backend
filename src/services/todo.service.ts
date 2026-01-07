import TodoRepository from "../repositories/todo.repository";

class TodoService {
  private todoRepository: TodoRepository;
  constructor(todoRepository: TodoRepository) {
    this.todoRepository = todoRepository;
  }

  async getAllTodos() {
    return await this.todoRepository.getAllTodos();
  }

  async createTodo(title: string, tags: string[], token: string) {
    console.log("Token from context:", token);
    return await this.todoRepository.createTodo(title, tags);
  }
}

export default TodoService;
