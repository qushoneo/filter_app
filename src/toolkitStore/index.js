import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import toolkitSlice from "./toolkitSlice";

const rootReducer = combineReducers({
    toolkit:toolkitSlice
})

export const store = configureStore({
    reducer:rootReducer
})