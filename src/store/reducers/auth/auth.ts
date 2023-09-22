import { IUser } from "../../../models/user";

export interface IAuth {
    isAuth:boolean,
    users:IUser,
    err:string,
    isLoading:boolean
}

export enum AuthTypes {
    SET_AUTH = 'SET_AUTH',
    USER_FETCH_STARTED ='USER_FETCH_STARTED',
    USER_FETCH_SUCCEEDED ='USER_FETCH_SUCCEEDED',
    USER_FETCH_FAILED ='USER_FETCH_FAILED'
}

export interface fetchUsers {
    type:AuthTypes.USER_FETCH_STARTED
}

export interface fetchUsersFailed {
    type:AuthTypes.USER_FETCH_FAILED,
    payload:string
}

export interface fetchUsersSuccess {
    type: AuthTypes.USER_FETCH_SUCCEEDED,
    payload: IUser
}

export interface setIsAuth {
    type:AuthTypes.SET_AUTH,
    payload:boolean
}

export type AuthAcionsTypes = 
    fetchUsers |
    fetchUsersFailed |
    fetchUsersSuccess |
    setIsAuth