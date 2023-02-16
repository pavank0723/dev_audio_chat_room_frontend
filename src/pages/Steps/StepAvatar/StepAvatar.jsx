import { Button, Card } from '../../../components'
import { AVATAR_HEADING, AVATAR_SUBHEADING, AVATAR_CHOOSE, IMG_DONE, PIC_AVATAR_DEF } from '../../../utils'
import styles from './StepAvatar.module.css'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setAvatar } from '../../../store/activateSlice'
import { activateUser } from '../../../https'

const StepAvatar = ({ onNext }) => {
    const { name,avatar } = useSelector((state) => state.activate)
    const [avatarImg, setAvatarImg] = useState(PIC_AVATAR_DEF)
    const dispatch = useDispatch()

    function captureAvatar(e){
        const uploadedImg = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(uploadedImg)
        reader.onloadend = function (){
            setAvatarImg(reader.result)
            dispatch(setAvatar(reader.result))
        }
        console.log(e)
    }
    async function onSubmit(){
        try {
            const {data} = await activateUser({avatar})
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <Card title={`${AVATAR_HEADING} ${name}`} image={IMG_DONE}>
                <p className={styles.subHeading}>{AVATAR_SUBHEADING}</p>
                <div className={styles.avaterWrapper}>
                    <img className={styles.avatarImg} src={avatarImg} alt="avatar_img" />
                </div>
                <div>
                    <input id='avatarInput' type='file' className={styles.avatarInput} onChange={captureAvatar} />
                    <label htmlFor='avatarInput' className={styles.avatarLabel}>{AVATAR_CHOOSE}</label>
                </div>
                <Button onClick={onSubmit} label="Next" />
            </Card>
        </>
    )
}

export default StepAvatar