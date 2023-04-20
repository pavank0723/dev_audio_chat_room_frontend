import React from 'react';
import styles from './Button.module.css';
import { IC_ARROW_FORWARD } from '../../../utils';
const Button = ({ text, onClick }) => {
    return (
        <button onClick={onClick} className={styles.button}>
            <span>{text}</span>
            <img
                className={styles.arrow}
                src={IC_ARROW_FORWARD}
                alt="arrow"
            />
        </button>
    );
};
export default Button;
