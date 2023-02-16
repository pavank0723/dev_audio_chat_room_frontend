import { useState } from "react"
import { StepAvatar, StepFullName, StepUsername } from "../steps"

const steps = {
    1: StepFullName,
    2: StepAvatar,
    // 3: StepUsername
}

const Activate = () => {
    const [step, setStep] = useState(1)
    const Step = steps[step]
    function onNext() {
        setStep(step + 1)
    }
    return (
        <>
            <div className="card_wrapper">
                <Step onNext={onNext} />
            </div>
        </>
    )
}

export default Activate