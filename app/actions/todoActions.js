import todoStore from '../stores/todoStore';

const todoActions = {
  addTodo: (todo) => todoStore.addTodo(todo),
  removeTodo: (todo) => todoStore.removeTodo(todo),
};

export default todoActions;
