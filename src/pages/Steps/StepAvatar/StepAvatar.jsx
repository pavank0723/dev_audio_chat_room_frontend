import { Button, Card, Loader } from '../../../components'
import { AVATAR_HEADING, AVATAR_SUBHEADING, AVATAR_CHOOSE, IMG_DONE, PIC_AVATAR_DEF } from '../../../utils'
import styles from './StepAvatar.module.css'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setAvatar } from '../../../store/activateSlice'
import { activateUser } from '../../../https'
import { setAuth } from '../../../store/authSlice'

const StepAvatar = () => {
    const { name, avatar } = useSelector((state) => state.activate)
    const [avatarImg, setAvatarImg] = useState(PIC_AVATAR_DEF)
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()

    function captureAvatar(e) {
        const uploadedImg = e.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(uploadedImg)
        reader.onloadend = function () {
            setAvatarImg(reader.result)
            dispatch(setAvatar(reader.result))
        }
        console.log(e)
    }
    async function onSubmit() {
        if (!name || !avatar) return
        setLoading(true)
        try {
            const { data } = await activateUser({ name, avatar })
            if (data.auth) {
                dispatch(setAuth(data))
            }
            console.log(data)
        } catch (error) {
            console.log(error)
        }
        finally {
            setLoading(false)
        }
    }
    if (loading) return <Loader message='Activation in progress...' />
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