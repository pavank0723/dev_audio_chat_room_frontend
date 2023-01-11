import { Button } from '../../../components'
import styles from './StepFullName.module.css'
const StepFullName = ({onNext}) => {
    return (
        <>
            <h1>StepFullName component</h1>
            
            <Button onClick={onNext} label="Next"/>
        </>
    )
}

export default StepFullName