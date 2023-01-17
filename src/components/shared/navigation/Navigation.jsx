import styles from './Navigation.module.css'
import {Link} from 'react-router-dom'
import { LOGO,LOGO_TEXT } from '../../../utils'
import ThemeMode from '../themes/ThemeMode'
const Navigation = () => {
    return(
        <nav className={`${styles.navbar} container`}>
            <Link className={`${styles.brand}`} to="/">
                <img src={LOGO} className='setu_logo' alt='logo'/>
                <span className={`${styles.logo_text}`}>{LOGO_TEXT}</span>
            </Link>
            <div className={`${styles.nav_toggle_main}`}>
                <ThemeMode />
            </div>
            
        </nav>
    )
}

export default Navigation