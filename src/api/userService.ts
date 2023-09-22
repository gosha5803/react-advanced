import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query'
import { IUser } from '../models/user'

export const userApi = createApi({
    reducerPath:'user/service',
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:2080'}),
    tagTypes:['users'],
    endpoints: (build) => ({
        'fetchUsers': build.query<IUser[], null>({
            query:() => ({
                url:'/users',
                
            }),
            providesTags:['users']
        })
    })
})