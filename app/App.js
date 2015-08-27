import React from 'react';
import Todos from './components/Todos';
import TodoActions from './actions/TodoActions';
import TodoStore from './stores/TodoStore';

const ENTER_KEY = 13;

function getTodos() {
  return {
    todos: TodoStore.getAll(),
  };
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = getTodos();
  }

  componentDidMount() {
    TodoStore.addChangeListener(this._onChange.bind(this));
  }

  componentWillUnmount() {
    TodoStore.removeChangeListener(this._onChange.bind(this));
  }

  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>React-Todo</h1>
        <input placeholder="Todo..." ref="newField" onKeyDown={this._onNewTodoKeyDown.bind(this)} autoFocus></input>
        <button onClick={this._onNewTodoClick.bind(this)}>Add</button>
        <Todos todos={this.state.todos} />
      </div>
    );
  }

  addTodo() {
    const val = React.findDOMNode(this.refs.newField).value.trim();
    TodoActions.addTodo(val);
    React.findDOMNode(this.refs.newField).value = '';
    React.findDOMNode(this.refs.newField).focus();
  }

  _onNewTodoKeyDown(event) {
    if (event.keyCode !== ENTER_KEY) {
      return;
    }
    this.addTodo();
  }

  _onNewTodoClick(event) {
    event.preventDefault();
    this.addTodo();
  }

  _onChange() {
    this.setState(getTodos());
  }
}

React.render(
  <App />,
  document.getElementById('app')
);
