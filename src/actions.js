import { Container } from 'aurelia-dependency-injection';
import { Store } from 'aurelia-store';

const store = Container.instance.get(Store);

import * as Mutations from './mutations';

function addTodo() {
  store.dispatch(Mutations.addTodo);
}

function editTodo() {
  store.dispatch(Mutations.editTodo);
}

function deleteTodo() {
  store.dispatch(Mutations.deleteTodo);
}

function setActiveTodo(todo) {
  store.disaptch(Mutations.setActiveTodo, todo);
}

export {
  addTodo,
  editTodo,
  deleteTodo,
  setActiveTodo
}
