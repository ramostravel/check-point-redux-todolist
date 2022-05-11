import {configureStore } from "@reduxjs/toolkit";
import toDoReducer from "./Features/task";
export const store= configureStore({
    reducer:{
        task:toDoReducer,
    }
});