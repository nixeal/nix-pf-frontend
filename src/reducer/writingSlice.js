import { createSlice } from "@reduxjs/toolkit";

const writingReducer= createSlice({
    name:'writing',
    initialState:[],
    reducers:{
        add(initialState,action){
            initialState.push(action.payload);
        },
        delete(initialState,action){
            initialState.filter((item)=>action.payload.id !== item.id);
        }
    }
});
export {writingReducer};
export const {add} = writingReducer.actions;
