import { useState } from 'react'
import { Button, Card, TextInput } from '../../../components'
import { FULL_NAME_HEADING, FULL_NAME_NOTE, IMG_FULLNAME } from '../../../utils'
import styles from './StepFullName.module.css'
const StepFullName = ({ onNext }) => {
    const [name, setName] = useState('')

    function nextStep() {
        if (!name) {
            return
        }
    }
    return (
        <>
            <Card title={FULL_NAME_HEADING} image={IMG_FULLNAME}>
                <TextInput value={name} onChange={(e) => setName(e.target.value)} />
                <p>{FULL_NAME_NOTE}</p>

            </Card>

            <div>
                <Button onClick={onNext} label="Next" />
            </div>
        </>
    )
}

export default StepFullName