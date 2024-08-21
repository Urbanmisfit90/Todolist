import { createAction } from '@reduxjs/toolkit';

export const addTodo = createAction('todos/add');
export const removeTodo = createAction('todos/remove');
