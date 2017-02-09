
import dispatcher from '../dispatcher/Dispatcher';
import { ADD_TODO, UPDATE_TODO } from '../constants/actionTypes';

export const TodoActions = {
  addTodo(text) {
    dispatcher.handleAction({
      type: ADD_TODO,
      payload: { text }
    });
  },
  updateTodo(id, text) {
    dispatcher.handleAction({
      type: UPDATE_TODO,
      payload: { id, text }
    });
  }
};
