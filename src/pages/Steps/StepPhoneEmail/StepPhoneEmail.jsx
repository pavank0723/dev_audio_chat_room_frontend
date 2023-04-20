import React, { useState } from 'react';
import Phone from './Phone/Phone';
import Email from './Email/Email';
import styles from './StepPhoneEmail.module.css';
import { IC_EMAIL, IC_PHONE } from '../../../utils';

const phoneEmailMap = {
    phone: Phone,
    email: Email,
};

const StepPhoneEmail = ({ onNext }) => {
    const [type, setType] = useState('phone');
    const Component = phoneEmailMap[type];

    return (
        <>
            <div className={styles.cardWrapper}>
                <div>
                    <div className={styles.buttonWrap}>
                        <button
                            className={`${styles.tabButton} ${
                                type === 'phone' ? styles.active : ''
                            }`}
                            onClick={() => setType('phone')}
                        >
                            <img src={IC_PHONE} alt="phone" />
                        </button>
                        <button
                            className={`${styles.tabButton} ${
                                type === 'email' ? styles.active : ''
                            }`}
                            onClick={() => setType('email')}
                        >
                            <img src={IC_EMAIL} alt="email" />
                        </button>
                    </div>
                    <Component onNext={onNext} />
                </div>
            </div>
        </>
    );
};

export default StepPhoneEmail;
