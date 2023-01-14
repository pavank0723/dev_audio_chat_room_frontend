import { Navigate, Outlet } from "react-router-dom"

const isAuth = false
const user = {
    activated: false
}
const ProtectedRoute = () => {
    return !isAuth ?<Navigate to='/'/> : isAuth && !user.activated ? <Navigate to='/activate'/>  : <Outlet /> 
}

export default ProtectedRoute