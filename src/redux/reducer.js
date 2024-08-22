import { createReducer } from '@reduxjs/toolkit';
import { toggleShowCompletedTodos, createNewTodo, toggleTodo } from './actions';

const initialState = {
  todos: [
    { id: 1, label: 'Laundry', complete: true },
    { id: 2, label: 'Groceries', complete: false },
    { id: 3, label: 'Dishes', complete: false },
  ],
  showCompletedTodos: true,
};

const todosReducer = createReducer(initialState, builder =>
  builder
    .addCase(toggleShowCompletedTodos, state => {
      state.showCompletedTodos = !state.showCompletedTodos;
    })
    .addCase(createNewTodo, (state, action) => {
      state.todos.push(action.payload);
    })
    .addCase(toggleTodo, (state, action) => {
      const todo = state.todos.find(td => td.id === action.payload);
      if (todo) todo.complete = !todo.complete;
    })
);

export default todosReducer;
