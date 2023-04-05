import { useState } from "react"
import { Button, Card, TextInput } from "../../../../components"
import { sendOtp } from "../../../../https/index"
import { BOTTOM_NOTE, IC_BACK_ARROW, IMG_PHONE, PHONE_HEADING } from "../../../../utils"
import styles from '../StepPhoneOrEmail.module.css'
import { useDispatch } from "react-redux"
import { setOtp } from "../../../../store/authSlice"

const Phone = ({ onNext }) => {
    const [phoneNumber, setPhoneNumber] = useState('')
    const dispatch = useDispatch()

    async function onSubmit() {
        if(!phoneNumber)return
        //Server  request
        const { data } = await sendOtp({ phone: phoneNumber })
        console.log(data)
        dispatch(setOtp({ phone: data.phone, hash: data.hash }))
        onNext()
    }
    return (
        <Card title={PHONE_HEADING} image={IMG_PHONE}>
            {/* <p className={`${styles.text}`}>{HOME_PARA}</p> */}
            <div className={styles.textField}>
            <TextInput input_type='text' input_placeholder='+91 00000000' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
            </div>
            
            <div>
                <Button label="Next" icon2={IC_BACK_ARROW} onClick={onSubmit} />
            </div>
            <div className={`${styles.card_note}`}>
                <p >{BOTTOM_NOTE}</p>
            </div>
        </Card>
    )
}

export default Phone