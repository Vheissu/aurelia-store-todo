import { Container } from 'aurelia-dependency-injection';
import { Store } from 'aurelia-store';

const store = Container.instance.get(Store);

function addTodo(state) {
  const newState = Object.assign({}, state);
  const newTodo = {
    text: 'My todo'
  };

  newState.todos.push(newTodo);
  newState.activeTodo = newTodo;

  console.log('New', newState);

  return newState;
}

function editTodo(state, text) {
  const newState = Object.assign({}, state);

  newState.activeTodo.text = text;

  return newState;
}

function deleteTodo(state) {
  const newState = Object.assign({}, state);
  const filtered = newState.todos.filter(todo => todo.text !== newState.activeTodo.text);

  newState.todos = filtered;
  newState.activeTodo = newState.todos[0];

  return newState;
}

function setActiveTodo(state, todo) {
  const newState = Object.assign({}, state);
  
  newState.activeTodo = todo;
  
  return newState;
}

store.registerAction('addTodo', addTodo);
store.registerAction('editTodo', editTodo);
store.registerAction('deleteTodo', deleteTodo);
store.registerAction('setActiveTodo', setActiveTodo);

export {
  addTodo,
  editTodo,
  deleteTodo,
  setActiveTodo
}
