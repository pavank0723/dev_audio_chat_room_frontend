import { Button } from '../../../components'
import styles from './StepAvatar.module.css'
const StepAvatar = ({onNext}) => {
    return (
        <>
            <h1>StepAvatar component</h1>
            
            <Button onClick={onNext} label="Next"/>
        </>
    )
}

export default StepAvatar