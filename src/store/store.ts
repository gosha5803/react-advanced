import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, createStore, applyMiddleware } from "redux";
import {allReducers} from './reducers/allReducers'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import { userApi } from "../api/userService";

const rootReducer = combineReducers(allReducers)

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

const setupStore = () => configureStore({
    reducer:rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(userApi.middleware)
})

// export const store = setupStore()

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch