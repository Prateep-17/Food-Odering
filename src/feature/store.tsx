import { combineReducers, configureStore } from "@reduxjs/toolkit";
import restaurentSlice from "./restaurentSlice";

const rootReducer = combineReducers({
    restaurent: restaurentSlice
})
export const store = configureStore({reducer: rootReducer})

export type AppDispatch = typeof store.dispatch;