import react from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { RouteNames, privateRoutes, publicRoutes } from '../router'

const AppRouter: react.FC = () => {
    const auth = true

    return(
        <>
        {auth ? 
            <>
            <Routes>
                {privateRoutes.map(route => 
                    <Route 
                    key={route.path}
                    path={route.path}
                    Component={route.element} />
                    )}
            </Routes>
                <Navigate to={RouteNames.EVENT}/>
            </>
            :
            <>
            <Routes>
                {publicRoutes.map(route => 
                    <Route
                    path={route.path}
                    key={route.path}
                    Component={route.element} />
                    )}
            </Routes>
                    <Navigate to={RouteNames.LOGIN}/>
            </>
        }
            </>
    )
}

export default AppRouter