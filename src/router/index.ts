import react from 'react' 
import LoginPage from '../pages/LOginPage'
import EventPage from '../pages/EventPage'

interface IRouter {
    path:string
    element: react.ComponentType
}

export enum RouteNames {
    EVENT = '/',
    LOGIN = '/login'
}

export const publicRoutes: IRouter[] = [
    {path:RouteNames.LOGIN, element:LoginPage}
]

export const privateRoutes: IRouter[] = [
    {path:RouteNames.EVENT, element:EventPage}
]