import { Navigate, Outlet } from "react-router-dom"

const isAuth = false
const user = {
    activated: false
}

const SemiProtectedRoute = () =>{
// const SemiProtectedRoute = ({ children, ...rest }) => {
    // const navigate = useNavigate()

    // useEffect(() => {

    //     !isAuth ?<Navigate to='/'/> : isAuth && !user.activated ? <Outlet /> : <Navigate to='/rooms'/> 
    // },[])
    

    // return (
    //     <>
    //         <Component />
    //     </>
    // )

    // const isAuth = useAuth()
    // return isAuth ? <Outlet /> : <Navigate to='/authenticate'/>
    return !isAuth ?<Navigate to='/'/> : isAuth && !user.activated ? <Navigate to='/authenticate'/>  : <Outlet /> 
    
}

export default SemiProtectedRoute