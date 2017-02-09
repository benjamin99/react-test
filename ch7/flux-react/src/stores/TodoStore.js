
import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/Dispatcher';
import { ADD_TODO } from '../constants/actionTypes';

class TodoStore extends EventEmitter {
  constructor() {
    super();
    this.todos = [];
    this.editing = false;
  }

  push(todo) {
    this.todos.push(todo);
  }

  addChangeListener(callback) {
    this.on(ADD_TODO, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(ADD_TODO, callback);
  }

  getTodos() {
    return this.todos;
  }
}

export const defaultTodoStore = new TodoStore();

dispatcher.register((action) => {
  switch (action.type) {
    case ADD_TODO:
      defaultTodoStore.push(action.payload.text);
      defaultTodoStore.emit(ADD_TODO);
      break;

    default:
      return true;
  }

  return true;
});
