import AppDispatcher from '../dispatcher/AppDispatcher';
import TodoConstants from '../constants/TodoConstants';

const TodoActions = {
  addTodo: (todo) => {
    AppDispatcher.dispatch({
      actionType: TodoConstants.TODO_ADD,
      todo: todo,
    });
  },

  removeTodo: (todo) => {
    AppDispatcher.dispatch({
      actionType: TodoConstants.TODO_REMOVE,
      todo: todo,
    });
  },
};

export default TodoActions;
