import { Store } from 'aurelia-store';

import * as Actions from './actions';

export class App {
  static inject = [Store];

  constructor(store) {
    this.store = store;
    this.actions = Actions;
    
    // Add an initial todo
    Actions.addTodo();
  }

  attached() {
    this.store.state.subscribe((state) => {
      this.state = state;
      console.log(state);
    });
  }
}
