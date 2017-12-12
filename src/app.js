import { Store } from 'aurelia-store';

const addTodo = (state) => {
  const newState = Object.assign({}, state);
  const newTodo = {
    text: 'My todo'
  };

  newState.todos.push(newTodo);
  newState.activeTodo = newTodo;

  return newState;
}

const editTodo = (state, text) => {
  const newState = Object.assign({}, state);

  newState.activeTodo.text = text;

  return newState;
};

export class App {
  constructor() {
    this.message = 'Hello World!';
  }
}
