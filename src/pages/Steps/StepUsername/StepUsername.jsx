import { Button } from '../../../components'
// import styles from './StepUsername.module.css'
const StepUsername = ({onNext}) => {
    return (
        <>
            <h1>StepUsername component</h1>
            <Button onClick={onNext} label="Next"/>
        </>
    )
}

export default StepUsername