import { useState } from "react"
import { Button, Card, TextInput } from "../../../../components"
import { sendOTP } from "../../../../https/index"
import { BOTTOM_NOTE, IC_BACK_ARROW, IMG_PHONE, PHONE_HEADING } from "../../../../utils"
import styles from '../StepPhoneOrEmail.module.css'

const Phone = ({onNext}) => {
    const [phoneNumber,setPhoneNumber] = useState('')

    async function onSubmit(){
        //Server  request
        const res = await sendOTP({phone:phoneNumber})
        console.log(res)
        // onNext()
    }
    return (
        <Card title={PHONE_HEADING} image={IMG_PHONE}>
            {/* <p className={`${styles.text}`}>{HOME_PARA}</p> */}
            <TextInput input_type='text' input_placeholder='+91 00000000' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
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