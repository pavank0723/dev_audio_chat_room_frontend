import { useState } from "react"
import { Button, Card, TextInput } from "../../../../components"
import { BOTTOM_NOTE, EMAIL_HEADING, IC_BACK_ARROW, IMG_EMAIL } from "../../../../utils"
import styles from '../StepPhoneOrEmail.module.css'

const Email = ({ onNext }) => {
    const [email, setEmail] = useState()
    return (
        <>
            <Card title={EMAIL_HEADING} image={IMG_EMAIL}>
                <div className={styles.textField}>
                    <TextInput input_type='email' input_placeholder='abc@test.com' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className=''>
                    <Button label="Next" icon2={IC_BACK_ARROW} onClick={onNext} />
                </div>
                <div className={`${styles.card_note}`}>
                    <p >{BOTTOM_NOTE}</p>

                </div>
            </Card>
        </>
    )
}

export default Email