import axios from "axios";
import { AuthAcionsTypes, AuthTypes, fetchUsers, fetchUsersFailed, fetchUsersSuccess, setIsAuth } from "./auth";
import { IUser } from "../../../models/user";
import { AppDispatch } from "../../store";
import { UserService } from "../../../api/UsersService";
import { Dispatch } from "react";

export const authActions = {
    setIsLoading: (): fetchUsers => ({
        type:AuthTypes.USER_FETCH_STARTED
    }),
    setUser: (user: IUser): fetchUsersSuccess => ({
        type: AuthTypes.USER_FETCH_SUCCEEDED,
        payload:user
    }),
    setError: (err: string): fetchUsersFailed => ({
        type: AuthTypes.USER_FETCH_FAILED,
        payload:err
    }),
    setAuth: (isAuth:boolean): setIsAuth => ({
        type: AuthTypes.SET_AUTH,
        payload: isAuth
    }),
    login:(username:string, password: string) => async (dispatch: Dispatch<AuthAcionsTypes>) => {
        try {
            dispatch(authActions.setIsLoading())
            setTimeout(async () => {
                const res = await UserService.getUsers()
            const users = res.data
            console.log(users, username, password)
            const authorizedUser = users.find(user => user.password == password && user.username == username)
            console.log(authorizedUser)
            if(authorizedUser) {
                localStorage.setItem('auth', 'true')
                localStorage.setItem('username', authorizedUser.username)
                dispatch(authActions.setUser(authorizedUser))
                dispatch(authActions.setAuth(true))
            } else {
                dispatch(authActions.setError('Неверное имя или пароль'))
            }
            }, 1000)
        } catch (e) {
            dispatch(authActions.setError('Ошибка авторизации'))
        }
    },
    logout:() => async (dispatch:AppDispatch) => {
        localStorage.removeItem('auth')
        localStorage.removeItem('username')
        dispatch(authActions.setUser({} as IUser))
        dispatch(authActions.setAuth(false))
    }
}