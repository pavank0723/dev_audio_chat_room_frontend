import styles from './Navigation.module.css'
import {Link} from 'react-router-dom'
import { LOGO,LOGO_TEXT } from '../../../utils'
import ThemeMode from '../themes/ThemeMode'
import { logout } from '../../../https'
import { useDispatch,useSelector } from 'react-redux'
import { setAuth } from '../../../store/authSlice'
const Navigation = () => {
    const dispatch = useDispatch()
    const {isAuth} = useSelector(state => state.auth)
    async function logoutUser(){
        try {
            const {data} = await logout()
            dispatch(setAuth(data))
        } catch (error) {
            console.log(error)
        }
        
    }
    return(
        <nav className={`${styles.navbar} container`}>
            <Link className={`${styles.brand}`} to="/">
                <img src={LOGO} className='setu_logo' alt='logo'/>
                <span className={`${styles.logo_text}`}>{LOGO_TEXT}</span>
            </Link>
            <div className={`${styles.nav_toggle_main}`}>
                <ThemeMode />
            </div>
            {isAuth && <button onClick={logoutUser}>Logout</button>}
            
        </nav>
    )
}

export default Navigation