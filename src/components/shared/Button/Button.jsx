import styles from './Button.module.css'
const Button = ({ label, icon1, icon2,onClick }) => {
    return (
        <button onClick={onClick} className={`${styles.btn_primary}`}>
            <img className={`${styles.icon}`} src={icon1} />
            <span>{label}</span>
            <img className={`${styles.icon}`} src={icon2} />
        </button>
    )
}

export default Button