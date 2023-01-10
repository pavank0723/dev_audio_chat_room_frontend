import styles from './Card.module.css'
const Card = ({title,image,children}) => {
    return (
        <div className={`${styles.card}`}>
            <div className={`${styles.heading_wrapper}`}>
                <img className='setu_logo' src={image} alt='logo' />
                <h1 className={`${styles.heading}`}>{title}</h1>
            </div>
            {children}
        </div>
    )
}

export default Card