import React from 'react';
import styles from './TextInput.module.css';

const TextInput = (props) => {
    return (
        <div>
            <input
                className={styles.input}
                style={{
                    width: props.fullwidth === 'true' ? '100%' : 'inherit',
                }}
                value={props.value} onChange={props.onChange} type={props.input_type} placeholder={props.input_placeholder} />
        </div>
    );
};

export default TextInput;
