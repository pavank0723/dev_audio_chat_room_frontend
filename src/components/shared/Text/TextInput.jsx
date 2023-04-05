import styles from './TextInput.module.css'
const TextInput = ({ input_type, input_placeholder, value, onChange }) => {
    return (
        <>
            <input className={`${styles.input}`} value={value} onChange={onChange} type={input_type} placeholder={input_placeholder} />

        </>
    )
}

export default TextInput