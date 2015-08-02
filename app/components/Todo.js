import React from 'react';

class Todo extends React.Component {
  render() {
    return (
      <li
        key={this.props.index}
        ref={this.props.todo}
        onClick={this.handleRemoveTodoClick.bind(this)}
        style={{cursor: 'pointer'}}
      >{this.props.todo}</li>
    );
  }

  handleRemoveTodoClick(event) {
    event.preventDefault();
    removeTodo(event.target.innerHTML);
  }
}

Todo.propTypes = {
  index: React.PropTypes.number.isRequired,
  todo: React.PropTypes.string.isRequired,
};

export default Todo;
