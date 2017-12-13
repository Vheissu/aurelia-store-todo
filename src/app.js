import { Store } from 'aurelia-store';

export class App {
  static inject = [Store];

  constructor(store) {
    this.store = store;
  }

  attached() {
    this.store.state.subscribe((state) => {
      this.state = state;
    });
  }
}
