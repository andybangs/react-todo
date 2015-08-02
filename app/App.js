import React from 'react';
import Todos from './components/Todos';
import TodoStore from './stores/TodoStore';

const ENTER_KEY = 13;

const todoStore = new TodoStore();
const addTodo = (todo) => todoStore.addTodo(todo);
const removeTodo = (todo) => todoStore.removeTodo(todo);

class App extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>React-Todo</h1>
        <input placeholder="Todo..." ref="newField" onKeyDown={this.handleNewTodoKeyDown.bind(this)} autoFocus></input>
        <Todos todos={this.props.todos} removeTodo={removeTodo} />
      </div>
    );
  }

  handleNewTodoKeyDown(event) {
    if (event.keyCode !== ENTER_KEY) {
      return;
    }

    event.preventDefault();

    const val = React.findDOMNode(this.refs.newField).value.trim();

    if (val) {
      addTodo(val);
      React.findDOMNode(this.refs.newField).value = '';
    }
  }
}

App.propTypes = {
  todos: React.PropTypes.array.isRequired,
};

function renderApp() {
  React.render(
    <App todos={todoStore.todos} />,
    document.getElementById('app')
  );
}

todoStore.on('change', renderApp);
renderApp();
