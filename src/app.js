import { Store } from 'aurelia-store';

import { addTodo } from './actions';

export class App {
  static inject = [Store];

  constructor(store) {
    this.store = store;

    // Add an initial todo
    addTodo();
  }

  attached() {
    this.store.state.subscribe((state) => {
      this.state = state;
      console.log(state);
    });
  }
}
