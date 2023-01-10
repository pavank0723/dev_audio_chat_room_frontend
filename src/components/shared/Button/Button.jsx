import styles from './Button.module.css'
const Button = ({ label, icon1, icon2 }) => {
    return (
        <button className={`${styles.btn_primary}`}>
            <img src={icon1} />
            <span>{label}</span>
            <img src={icon2} />
        </button>
    )
}

export default Button