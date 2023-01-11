import { useState } from 'react'
import { StepOtp, StepPhoneOrEmail } from '../Steps'
import styles from './Login.module.css'


const steps = {
    1: StepPhoneOrEmail,
    2: StepOtp
}
const Login = () => {
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

export default Login