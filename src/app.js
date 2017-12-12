import { Store } from 'aurelia-store';

const addTodo = (state, todo) => {
  const newState = Object.assign({}, state);

  newState.todos.push(todo);

  return newState;
}

export class App {
  constructor() {
    this.message = 'Hello World!';
  }
}
