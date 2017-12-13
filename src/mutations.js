import { Container } from 'aurelia-dependency-injection';
import { Store } from 'aurelia-store';

import colours from './colours';

const store = Container.instance.get(Store);

function addTodo(state, text) {
  const newState = Object.assign({}, state);
  const newTodo = {
    background: colours[Math.floor(Math.random() * colours.length)],
    isEditing: false,
    text: text
  };

  newState.todos.push(newTodo);

  return newState;
}

function editTodo(state, todo) {
  const newState = Object.assign({}, state);
  const todoIdx = newState.todos.findIndex((t) => t === todo);

  newState.todos = [
    ...newState.todos.slice(0, todoIdx),
    Object.assign({}, todo, { isEditing: false }),
    ...newState.todos.slice(todoIdx + 1)
  ];

  return newState;
}

function completeTodo(state, todo) {
  const newState = Object.assign({}, state);
  const todoIdx = newState.todos.findIndex((t) => t === todo);

  newState.todos = [
    ...newState.todos.slice(0, todoIdx),
    Object.assign({}, todo, { isComplete: !todo.isComplete }),
    ...newState.todos.slice(todoIdx + 1)
  ];

  return newState;
}

function deleteTodo(state) {
  // const newState = Object.assign({}, state);
  // const filtered = newState.todos.filter(todo => todo.text !== newState.activeTodo.text);

  // newState.todos = filtered;
  // newState.activeTodo = newState.todos[0];

  // return newState;
}

function activateTodoEditMode(state, todo) {
  const newState = Object.assign({}, state);
  const todoIdx = newState.todos.findIndex((t) => t === todo);

  newState.todos = [
    ...newState.todos.slice(0, todoIdx),
    Object.assign({}, todo, { isEditing: true }),
    ...newState.todos.slice(todoIdx + 1)
  ];

  return newState;
}

store.registerAction('addTodo', addTodo);
store.registerAction('completeTodo', completeTodo);
store.registerAction('editTodo', editTodo);
store.registerAction('deleteTodo', deleteTodo);
store.registerAction('activateTodoEditMode', activateTodoEditMode);

export {
  addTodo,
  completeTodo,
  editTodo,
  deleteTodo,
  activateTodoEditMode
};
