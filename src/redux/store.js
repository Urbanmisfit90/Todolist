import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './state/todosSlice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
