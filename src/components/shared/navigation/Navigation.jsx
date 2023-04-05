import styles from './Navigation.module.css'
import { Link } from 'react-router-dom'
import { IC_LOGOUT, LOGO, LOGO_TEXT, PIC_AVATAR_DEF } from '../../../utils'
import ThemeMode from '../themes/ThemeMode'
import { logout } from '../../../https'
import { useDispatch, useSelector } from 'react-redux'
import { setAuth } from '../../../store/authSlice'
const Navigation = () => {
    const dispatch = useDispatch()
    const { isAuth, user } = useSelector(state => state.auth)
    async function logoutUser() {
        try {
            const { data } = await logout()
            dispatch(setAuth(data))
        } catch (error) {
            console.log(error)
        }

    }
    return (
        <nav className={`${styles.navbar} container`}>
            <Link className={`${styles.brand}`} to="/">
                <img src={LOGO} className='setu_logo' alt='logo' />
                <span className={`${styles.logo_text}`}>{LOGO_TEXT}</span>
            </Link>
            <div className={`${styles.nav_Right}`}>
                {isAuth && <h3 className={styles.user_name}>{user?.name}</h3>}
                <Link to="/">
                    {isAuth && <img className={`${styles.avatar}`} src={user.avatar ? user.avatar : PIC_AVATAR_DEF} width="50" height="50" alt="avatar" />}
                </Link>
            </div>
            <div className={`${styles.nav_toggle_main}`}>
                <ThemeMode />
            </div>
            {isAuth && <button className={styles.logout_btn} onClick={logoutUser}><img src={IC_LOGOUT} /></button>}

        </nav>
    )
}

export default Navigation