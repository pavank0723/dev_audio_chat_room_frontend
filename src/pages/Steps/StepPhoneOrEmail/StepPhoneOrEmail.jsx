import { Button } from '../../../components'
import styles from './StepPhoneOrEmail.module.css'
const StepPhoneOrEmail = ({onNext}) => {
    return (
        <>
            <h1>StepPhoneOrEmail component</h1>
            <Button onClick={onNext} label="Next"/>
        </>
    )
}

export default StepPhoneOrEmail