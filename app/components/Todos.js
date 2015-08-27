import React from 'react';
import TodoActions from '../actions/TodoActions';

class Todos extends React.Component {
  render() {
    const todos = this.props.todos;
    const todoItems = [];

    for (const key in todos) {
      if (todos.hasOwnProperty(key)) {
        todoItems.push(<li key={key} ref={todos[key]} onClick={this._onRemoveTodoClick} style={{cursor: 'pointer'}}>{todos[key]}</li>);
      }
    }

    return (
      <ul style={{listStyle: 'none', padding: 0}}>
        {todoItems}
      </ul>
    );
  }

  _onRemoveTodoClick(event) {
    event.preventDefault();
    TodoActions.removeTodo(event.target.innerHTML);
  }
}

Todos.propTypes = {
  todos: React.PropTypes.object.isRequired,
};

export default Todos;
