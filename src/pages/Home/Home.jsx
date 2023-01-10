import { Link } from 'react-router-dom'
import Button from '../../components/shared/Button/Button'
import Card from '../../components/shared/Card/Card'
import { HOME_HEADING, HOME_PARA, IC_BACK_ARROW, LOGO } from '../../utils'
import styles from './Home.module.css'
const Home = () => {
    return (
        <div className={`${styles.card_wrapper}`}>
            <Card title={HOME_HEADING} image={LOGO}>
                <p className={`${styles.text}`}>{HOME_PARA}</p>
                <div className=''>
                    <Button label="Get your username" icon2={IC_BACK_ARROW} />
                </div>
                <div className={`${styles.signing_wrapper}`}>
                    <span >Have an invite text?</span>
                    <Link to='/login' className={`${styles.has_invite}`}>Sign In</Link>
                </div>
            </Card>
        </div>

    )
}

export default Home