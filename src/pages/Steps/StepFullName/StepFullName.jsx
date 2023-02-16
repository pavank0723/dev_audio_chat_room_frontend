import { useState } from 'react'
import { Button, Card, TextInput } from '../../../components'
import { FULL_NAME_HEADING, FULL_NAME_NOTE, IMG_FULLNAME } from '../../../utils'
// import styles from './StepFullName.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setName } from '../../../store/activateSlice'

const StepFullName = ({ onNext }) => {
    const { name } = useSelector((state) => state.activate)
    const [fullname, setFullname] = useState(name)
    const dispatch = useDispatch()

    function nextStep() {
        if (!fullname) {
            return
        }
        dispatch(setName(fullname))
        onNext()
    }
    return (
        <>
            <Card title={FULL_NAME_HEADING} image={IMG_FULLNAME}>
                <TextInput value={fullname} onChange={(e) => setFullname(e.target.value)} />
                <p>{FULL_NAME_NOTE}</p>
                <div>
                    <Button onClick={nextStep} label="Next" />
                </div>

            </Card>
        </>
    )
}

export default StepFullName