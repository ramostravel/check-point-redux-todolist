import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice ({
    name : 'task', 
    initialState : 
    {
        List : [
            {id:0,Description :"todo1", isDone:false},
            {id:1,Description :"todo2", isDone:false},
            {id:2,Description :"todo3", isDone:false},
        ],
     
        
    },

    reducers : {
        afficher : (state,action) => {
            const newTodo= {
                    id:Date.now(),
                    Description : action.payload.Description,
                    isDone:false,
            }; 
            state.List.push(newTodo);
        },
        isDone : (state,action) => {
            const index = state.List.findIndex ((el) => el.id === action.payload.id);
            state.List[index].isDone=action.payload.isDone;
        },
        deleteTodo : (state,action) => {
            state.List=state.List.filter ((el) => el.id != action.payload.id);
        },
        listecompleted : (state,action) => {
            state.List= state.List.filter ((el) => el.isDone === action.payload.isDone);
        },
        edittask : (state,action) => {
            const index = state.List.findIndex ((el) => el.id === action.payload.id);
            state.List[index].Description=action.payload.Description;
        },
      
    },
});
export const { afficher, isDone, deleteTodo,listecompleted, edittask } = taskSlice.actions;
export default taskSlice.reducer;