import React from 'react';

class Todos extends React.Component {
  render() {
    return (
      <ul style={{listStyle: 'none', padding: 0}}>
        {this.props.todos.map((todo, index) => {
          return (
            <li key={index}
              ref={todo}
              onClick={this.handleRemoveTodoClick.bind(this)}
              style={{cursor: 'pointer'}}>{todo}</li>
          );
        })}
      </ul>
    );
  }

  handleRemoveTodoClick(event) {
    event.preventDefault();
    this.props.removeTodo(event.target.innerHTML);
  }
}

Todos.propTypes = {
  todos: React.PropTypes.array.isRequired,
  removeTodo: React.PropTypes.func.isRequired,
};

export default Todos;
