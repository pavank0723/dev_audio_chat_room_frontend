// import { useEffect } from "react"
// import { useNavigate } from "react-router-dom"
import { Navigate, Outlet } from "react-router-dom"
import { useSelector } from "react-redux"

const GuestRoute = ({ Component }) => {
    const {isAuth} = useSelector((state) =>state.auth)
    // const navigate = useNavigate()

    // useEffect(() => {
    //     if (!isAuth) {
    //         // navigate('/authenticate')
    //         <Navigate to='/authenticate'/>
    //     }
    // },[])
    // return isAuth ? <Navigate to='/rooms' /> : <Outlet /> 
    return isAuth ? <Navigate to='/rooms' /> : <Outlet /> 
}

export default GuestRoute