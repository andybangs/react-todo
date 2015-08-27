import AppDispatcher from '../dispatcher/AppDispatcher';
import { EventEmitter } from 'events';
import TodoConstants from '../constants/TodoConstants';

const CHANGE_EVENT = 'change';
const _todos = {};

function addTodo(todo) {
  _todos[todo] = {
    todo: todo,
  };
}

function removeTodo(todo) {
  delete _todos[todo];
}

class TodoStore extends EventEmitter {
  constructor() {
    super();
  }

  getAll() {
    return _todos;
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}

const todoStoreInstance = new TodoStore();

todoStoreInstance.dispatchToken = AppDispatcher.register((action) => {
  switch (action.actionType) {
    case TodoConstants.TODO_ADD:
      const todo = action.todo.trim();
      if (todo !== '') {
        addTodo(todo);
      }
      break;

    case TodoConstants.TODO_REMOVE:
      removeTodo(action.todo);
      break;

    default:
      return;
  }

  todoStoreInstance.emitChange();
});

export default todoStoreInstance;
