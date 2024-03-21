import { createSlice } from "@reduxjs/toolkit";

export const todoSlice =  createSlice({
    name:'todo',
    initialState:{
        todoArray:[],
        checked:false
       
    },
    reducers:{
        addTodo:(state,action)=>{
            state.todoArray.push(action.payload)
        },
        delTodo:(state,action)=>{

            
            
             state.todoArray = state.todoArray.filter(item => item!== action.payload);
        }, 
    }
})

export const {addTodo, delTodo} = todoSlice.actions
export default todoSlice.reducer