// import { useEffect } from "react"
// import { useNavigate } from "react-router-dom"
import { Navigate, Outlet } from "react-router-dom"

const isAuth = false
const GuestRoute = ({ Component }) => {
    // const navigate = useNavigate()

    // useEffect(() => {
    //     if (!isAuth) {
    //         // navigate('/authenticate')
    //         <Navigate to='/authenticate'/>
    //     }
    // },[])
    return !isAuth ? <Outlet /> :  <Navigate to='/rooms' />
}

export default GuestRoute