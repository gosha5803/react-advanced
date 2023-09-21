import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { AuthAcionsTypes, AuthTypes, IAuth } from '../../types/auth'
import { IUser } from '../../types/user'

const initialState:IAuth = {
    isAuth:false,
    isLoading:false,
    err:'',
    users: {} as IUser
}

export const authReducer = (state:IAuth = initialState, action:AuthAcionsTypes):IAuth => {
    switch(action.type) {
        case AuthTypes.SET_AUTH:
            return {...state, isAuth:action.payload}
        case AuthTypes.USER_FETCH_STARTED:
            return {...state, isLoading:true}
        case AuthTypes.USER_FETCH_SUCCEEDED:
            return {...state, isLoading: false, users:action.payload}
        case AuthTypes.USER_FETCH_FAILED:
            return {...state, isLoading: false, err:action.payload}
        default: return state
    }
}

