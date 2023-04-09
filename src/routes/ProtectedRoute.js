import { Navigate, Outlet } from "react-router-dom"

import { useSelector } from "react-redux"


const ProtectedRoute = () => {
    const { user, isAuth } = useSelector((state) => state.auth)

    return !isAuth 
    ? <Navigate to='/' /> 
    : isAuth && !user.activated 
    ? <Navigate to='/activate' /> 
    : <Outlet />

    // return !isAuth ? <Navigate to='/' /> : isAuth && !user.activated ? <Outlet /> : <Navigate to='/rooms' />
}

export default ProtectedRoute