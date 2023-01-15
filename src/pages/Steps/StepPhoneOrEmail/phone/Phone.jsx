import { useState } from "react"
import { Button, Card, TextInput } from "../../../../components"
import { BOTTOM_NOTE, IC_BACK_ARROW, IMG_PHONE, PHONE_HEADING } from "../../../../utils"
import styles from '../StepPhoneOrEmail.module.css'
const Phone = ({onNext}) => {
    const [phone,setPhone] = useState()
    return (
        <Card title={PHONE_HEADING} image={IMG_PHONE}>
            {/* <p className={`${styles.text}`}>{HOME_PARA}</p> */}
            <TextInput input_type='text' input_placeholder='+91 00000000' value={phone} onChange={(e) => setPhone(e.target.value)}/>
            <div>
                <Button label="Next" icon2={IC_BACK_ARROW} onClick={onNext} />
            </div>
            <div className={`${styles.card_note}`}>
                <p >{BOTTOM_NOTE}</p>
            </div>
        </Card>
    )
}

export default Phone