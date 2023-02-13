import { Button, Card } from '../../../components'
import { HOW_THIS_PHOTO, IMG_DONE } from '../../../utils'
// import styles from './StepAvatar.module.css'
const StepAvatar = ({onNext}) => {
    return (
        <>
            <Card title={HOW_THIS_PHOTO} image={IMG_DONE}>
                
            </Card>
            
            <Button onClick={onNext} label="Next"/>
        </>
    )
}

export default StepAvatar