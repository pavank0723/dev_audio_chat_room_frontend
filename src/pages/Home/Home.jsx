import { useNavigate } from 'react-router-dom'
import { Button, Card } from '../../components'
import { HOME_HEADING, HOME_PARA, IC_BACK_ARROW, LOGO } from '../../utils'
import styles from './Home.module.css'
const Home = () => {
    const navigate = useNavigate()
    function startRegister(){
        navigate('/authenticate')
    }
    return (
        <div className='card_wrapper'>
            <Card title={HOME_HEADING} image={LOGO}>
                <p className={`${styles.text}`}>{HOME_PARA}</p>
                <div className=''>
                    <Button onClick={startRegister} label="Let's go" icon2={IC_BACK_ARROW} />
                </div>
                <div className={`${styles.signing_wrapper}`}>
                    <span >Have an invite text?</span>
                    {/* <Link to='/login' className={`${styles.has_invite}`}>Sign In</Link> */}
                </div>
            </Card>
        </div>

    )
}

export default Home