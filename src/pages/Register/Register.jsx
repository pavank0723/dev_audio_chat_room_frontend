import { useState } from 'react'
import { StepAvatar, StepFullName, StepOtp, StepPhoneOrEmail, StepUsername } from '../steps'
import styles from './Register.module.css'

const steps = {
    1: StepPhoneOrEmail,
    2: StepOtp,
    3: StepFullName,
    4: StepAvatar,
    5: StepUsername
}
const Register = () => {
    const [step, setStep] = useState(1)
    const Step = steps[step]
    function onNext(){
        setStep(step+1)
    }
    return (
        <>
            <Step onNext={onNext}/>
        </>
    )
}

export default Register