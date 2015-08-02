import { EventEmitter } from 'events';

class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.todos = [];
  }

  addTodo(todo) {
    this.todos.push(todo);
    this.emit('change');
  }

  removeTodo(todo) {
    this.todos.forEach((item, index) => {
      if (item === todo) {
        this.todos.splice(index, 1);
        this.emit('change');
      }
    });
  }
}

export default TodoStore;
