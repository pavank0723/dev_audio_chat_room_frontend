import { Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"

// const isAuth = false
// const user = {
//     activated: false
// }

const SemiProtectedRoute = () => {
    const { user, isAuth } = useSelector((state) => state.auth)

    return !isAuth ? <Navigate to='/' /> : isAuth && !user.activated ?<Outlet />  : <Navigate to='/rooms' />
}

export default SemiProtectedRoute