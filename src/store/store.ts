import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, createStore } from "redux";
import {allReducers} from './reducers/allReducers'

const rootReducer = combineReducers(allReducers)

export const store = createStore(rootReducer)

// const store = setupStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>