import React from 'react';
import Todos from './components/Todos';
import todoActions from './actions/todoActions';
import todoStore from './stores/todoStore';

const ENTER_KEY = 13;

class App extends React.Component {
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>React-Todo</h1>
        <input placeholder="Todo..." ref="newField" onKeyDown={this.handleNewTodoKeyDown.bind(this)} autoFocus></input>
        <button onClick={this.handleNewTodoClick.bind(this)}>Add</button>
        <Todos todos={this.props.todos} removeTodo={todoActions.removeTodo} />
      </div>
    );
  }

  addTodo(event) {
    event.preventDefault();

    const val = React.findDOMNode(this.refs.newField).value.trim();

    if (val) {
      todoActions.addTodo(val);
      React.findDOMNode(this.refs.newField).value = '';
      React.findDOMNode(this.refs.newField).focus();
    }
  }

  handleNewTodoKeyDown(event) {
    if (event.keyCode !== ENTER_KEY) {
      return;
    }

    this.addTodo(event);
  }

  handleNewTodoClick(event) {
    if (event.type !== 'click') {
      return;
    }

    this.addTodo(event);
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
