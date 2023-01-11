import { Button } from '../../../components'
import styles from './StepOtp.module.css'
const StepOtp = ({ onNext }) => {
    return (
        <>
            <h1>StepOtp component</h1>

            <Button onClick={onNext} label="Next" />
        </>
    )
}

export default StepOtp