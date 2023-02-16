import { useState } from 'react'
import { StepOtp, StepPhoneOrEmail } from '../steps'
// import styles from './Authenticate.module.css'


const steps = {
    1: StepPhoneOrEmail,
    2: StepOtp
}
const Authenticate = () => {
    const [step, setStep] = useState(1)
    const Step = steps[step]
    function onNext() {
        setStep(step + 1)
    }
    return (
        <div className="card_wrapper">
            <Step onNext={onNext} />
        </div>
    )
}

export default Authenticate