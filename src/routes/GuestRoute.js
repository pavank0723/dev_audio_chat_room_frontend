import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const GuestRoute = ({ Component }) => {
    const navigate = useNavigate()

    useEffect(() => {
        let login = localStorage.getItem('login')
        if (!login) {
            navigate('/authenticate')
        }
    })
    return (
        <>
            <Component />
        </>
    )
}

export default GuestRoute