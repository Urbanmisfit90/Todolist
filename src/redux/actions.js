import { createAction } from '@reduxjs/toolkit';

export const toggleShowCompletedTodos = createAction('todos/toggleShowCompletedTodos');
export const createNewTodo = createAction('todos/createNewTodo', (label, complete) => ({
  payload: { id: Date.now(), label, complete },
}));
export const toggleTodo = createAction('todos/toggleTodo');

