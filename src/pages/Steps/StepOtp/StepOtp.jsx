import { useState } from 'react'
import { Button, Card, TextInput } from '../../../components'
import { IC_BACK_ARROW, IMG_LOCK, OTP_HEADING } from '../../../utils'
import styles from './StepOtp.module.css'
import { verifyOtp } from '../../../https'
import { useSelector } from 'react-redux'
import { setAuth } from '../../../store/authSlice'
import { useDispatch } from 'react-redux'

const StepOtp = () => {
    const [otp, setOtp] = useState('')
    const { phone, hash } = useSelector((state) => state.auth.otp)
    const dispatch = useDispatch()

    async function onSubmit() {
        try {
            const { data } = await verifyOtp({ otp, phone, hash })
            console.log(data)
            dispatch(setAuth(data))
            // onNext()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className={`${styles.card_wrapper}`}>
                <Card title={OTP_HEADING} image={IMG_LOCK}>
                    {/* <p className={`${styles.text}`}>{HOME_PARA}</p> */}
                    <TextInput input_type='text' input_placeholder='' value={otp} onChange={(e) => setOtp(e.target.value)} />
                    <div>
                        <Button label="Next" icon2={IC_BACK_ARROW} onClick={onSubmit} />
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