import { useState } from 'react'
import { Button, Card, TextInput } from '../../../components'
import { IC_BACK_ARROW, IMG_LOCK, OTP_HEADING } from '../../../utils'
import styles from './StepOtp.module.css'
const StepOtp = ({ onNext }) => {
    const [otp, setOtp] = useState()
    return (
        <>
            <div className={`${styles.card_wrapper}`}>
                <Card title={OTP_HEADING} image={IMG_LOCK}>
                    {/* <p className={`${styles.text}`}>{HOME_PARA}</p> */}
                    <TextInput input_type='text' input_placeholder='+91 00000000' value={otp} onChange={(e) => setOtp(e.target.value)} />
                    <div>
                        <Button label="Next" icon2={IC_BACK_ARROW} />
                    </div>
                    {/* <div className={`${styles.card_note}`}>
                <p >{BOTTOM_NOTE}</p>

            </div> */}
                </Card>
            </div>
        </>
    )
}

export default StepOtp