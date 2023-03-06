import Card from "../card/Card"
import styles from './Loader.module.css'

const Loader = ({ message }) => {
    return (
        <div className="card_wrapper">
            <Card>
                <svg className={styles.spinner} xmlns="http://www.w3.org/2000/svg" width="42" height="41" fill="none"><circle cx="21" cy="20.779" r="18" stroke="#C4C5C5" strokeWidth="4" /><path fill="#07F" d="M20.778.78A20 20 0 1 1 1.543 25.408l3.876-.922a16.016 16.016 0 1 0 15.403-19.72L20.778.78Z" /></svg>
                <span className={styles.loading_message}>{message}</span>
            </Card>
        </div>
    )
}

export default Loader