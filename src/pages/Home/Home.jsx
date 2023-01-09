import { Link } from 'react-router-dom'
import { HOME_HEADING, HOME_PARA, IC_BACK_ARROW, LOGO } from '../../utils'
import styles from './Home.module.css'
const Home = () => {
    return (
        <div className={`${styles.card_wrapper}`}>
            <div className={`${styles.card}`}>
                <div className={`${styles.heading_wrapper}`}>
                    <img className='setu_logo' src={LOGO} alt='logo' />
                    <h1 className={`${styles.heading}`}>{HOME_HEADING}</h1>

                </div>
                <p className={`${styles.text}`}>{HOME_PARA}</p>
                <div className=''>
                    <button className={`${styles.btn_primary}`}>
                        <span>Get your username</span>
                        <img src={IC_BACK_ARROW} />
                    </button>
                </div>
                <div className={`${styles.signing_wrapper}`}>
                    <span >Have an invite text?</span>
                    <Link to='/login' className={`${styles.has_invite}`}>Sign In</Link>
                </div>
            </div>
        </div>

    )
}

export default Home