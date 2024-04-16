import { createSlice, nanoid } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todoArray: [],
  },
  reducers: {
    //Action defined for appending todos
    addTodo: (state, action) => {
      if (action.payload)
        state.todoArray.push({
          id: nanoid(),
          todo: action.payload,
          completed: false,
        });
    },

    //Action defined for deleting todos
    delTodo: (state, action) => {
      state.todoArray = state.todoArray.filter(
        (todo) => todo.id !== action.payload
      );
    },
    //Action defined for toogling the completed states of todos
    toogleComplete: (state, action) => {
      const todoItem = state.todoArray.find(
        (todo) => todo.id === action.payload
      );
      if (todoItem) todoItem.completed = !todoItem.completed;
    },
  },
});

export const { addTodo, delTodo, toogleComplete } = todoSlice.actions;
export default todoSlice.reducer;
