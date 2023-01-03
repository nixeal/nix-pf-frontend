import { configureStore } from "@reduxjs/toolkit";
import {writingReducer} from './reducer/writingSlice';
import projectReducer from './reducer/projectSlice';
const store = configureStore({
    reducer:{
        writing:writingReducer,
        project:projectReducer
    }
})

export default store;