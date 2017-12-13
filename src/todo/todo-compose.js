import { containerless } from 'aurelia-framework';
import { Store } from 'aurelia-store';
import * as Actions from '../actions';

@containerless()
export class TodoCompose {
  static inject = [Store];

  composedTodo = '';
  
  constructor(store) {
    this.actions = Actions;
  }

  addTodo() {
    this.actions.addTodo(this.composedTodo);
    this.composedTodo = '';
  }
}
