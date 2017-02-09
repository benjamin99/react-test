
import React, { Component } from 'react';
import { defaultTodoStore } from '../../stores/TodoStore';

function getAppState() {
  return {
    todos: defaultTodoStore.getTodos()
  };
}

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    defaultTodoStore.addChangeListener(this.onChange);
  }

  onChange() {
    this.setState(getAppState());
  }

  render() {
    return (
      <div>
        <ul>
          {
            this.state.todos.map((todo, index) => (
              <li key={index}>{todo}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default TodoList;
