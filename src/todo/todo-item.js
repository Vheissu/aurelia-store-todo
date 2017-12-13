import {
  bindable,
  containerless
} from 'aurelia-framework';

import { setActiveTodo } from '../actions';

@containerless()
export class TodoItem {
  @bindable() data;

  selectItem() {
    setActiveTodo(this.data);
  }
}
