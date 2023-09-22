import axios, {AxiosResponse} from 'axios'
import {IUser} from '../models/user'

export class UserService {
    static async getUsers(): Promise<AxiosResponse<IUser[]>> {
        return axios.get<IUser[]>('http://localhost:2080/users')
    }
}