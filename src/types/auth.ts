import { IUser } from "./user";

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

interface fetchUsers {
    type:AuthTypes.USER_FETCH_STARTED
}

interface fetchUsersFailed {
    type:AuthTypes.USER_FETCH_FAILED,
    payload:string
}

interface fetchUsersSuccess {
    type: AuthTypes.USER_FETCH_SUCCEEDED,
    payload: IUser
}

interface setIsAuth {
    type:AuthTypes.SET_AUTH,
    payload:boolean
}

export type AuthAcionsTypes = 
    fetchUsers |
    fetchUsersFailed |
    fetchUsersSuccess |
    setIsAuth