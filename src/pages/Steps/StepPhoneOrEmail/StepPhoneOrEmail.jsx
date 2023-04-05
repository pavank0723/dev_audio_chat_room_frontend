import { useState } from 'react'
import { IC_EMAIL, IC_PHONE } from '../../../utils'
import Email from './email/Email'
import styles from './StepPhoneOrEmail.module.css'
import Phone from './phone/Phone'

const phoneEmailMap = {
    phone: Phone,
    email: Email
}
const StepPhoneOrEmail = ({ onNext }) => {
    const [tab, setTab] = useState('phone')
    const Component = phoneEmailMap[tab]
    // function onNext(){
    //     // setTab(tab+1)
    // }
    return (
        <>
            <div>
                    <div className={`${styles.button_wrapper}`}>
                        <button className={`${styles.btn_tab} ${tab === 'phone' ? styles.btn_tab_active : ''}`} onClick={() => setTab('phone')}>
                            <img src={IC_PHONE} alt='phone' />
                        </button>
                        <button className={`${styles.btn_tab} ${tab === 'email' ? styles.btn_tab_active : ''}`} onClick={() => setTab('email')}>
                            <img src={IC_EMAIL} alt='email' />
                        </button>
                    </div>
                    
                <Component onNext={onNext} />
                </div>
        </>
    )
}

export default StepPhoneOrEmail