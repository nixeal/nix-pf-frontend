import { createSlice } from "@reduxjs/toolkit";

const projectReducer =createSlice({
    name:'project',
    initialState:[],
    reducers:{
        add(initialState,action){  
            initialState.push(action.payload);
            console.log(initialState);
        },
        delete(initialState,action){
            
        }
    }
});
export const {add} = projectReducer.actions;
export  default projectReducer; 
