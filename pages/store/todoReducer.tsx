import { createSlice } from '@reduxjs/toolkit';



interface TodoItem {
    todos: Item[];
}

interface Item {
  id: Number;
  name: string;
  active: Boolean;
}


const initialState:TodoItem ={
    todos: []
}

  
const todosSlice = createSlice({

    name: 'todos',
    initialState,
    reducers: {
        todoAdded(state, action) {
          state.todos.push({
            id: action.payload._id,
            name: action.payload.name,
            active: false
          })
        },
        removeTodo(state, action) {
          const a = state.todos.filter(item => item.id !== action.payload);
          state.todos = a;
        },
        completeTodo(state, action) {
          const newArr = state.todos.filter(item => item.id === action.payload.id);
      
          newArr[0].active = !newArr[0].active;
          state=state;
        },
        updateTodo(state, action) {
          const newArr = state.todos.filter(item => item.id === action.payload.id);
          newArr[0].name=action.payload.name;
          state=state;
        }
    }

});
export const selectTodos =(state: any)=> state.todos.todos;
export const { todoAdded, removeTodo, completeTodo, updateTodo } = todosSlice.actions;
export default todosSlice.reducer