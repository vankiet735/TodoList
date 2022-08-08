import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todoReducer';

const store = configureStore({
  reducer: {
    todos: todosReducer
  }
})

export default store;