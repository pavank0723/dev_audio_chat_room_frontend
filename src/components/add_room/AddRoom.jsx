import React, { useState } from 'react';
import styles from './AddRoom.module.css';
import TextInput from '../shared/text/TextInput';
import { createRoom as create } from '../../https';
import { IC_CLOSE, IMG_GO, PIC_OPEN, PIC_PRIVATE, PIC_SOCIAL } from '../../utils';

import { useNavigate } from 'react-router-dom'

const AddRoom = ({ onClose }) => {
    const history = useNavigate()
    const [roomType, setRoomType] = useState('open');
    const [topic, setTopic] = useState('');

    async function createRoom() {
        try {
            if (!topic) return;
            const { data } = await create({ topic, roomType })
            history(`/room/${data.id}`)
            // console.log(data)
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className={styles.modalMask}>
            <div className={styles.modalBody}>
                <button onClick={onClose} className={styles.closeButton}>
                    <img src={IC_CLOSE} alt="close" />
                </button>
                <div className={styles.modalHeader}>
                    <h3 className={styles.heading}>
                        Enter the topic to be disscussed
                    </h3>
                    <TextInput
                        fullwidth="true"
                        value={topic}
                        input_placeholder="e.g. Developer issues"
                        onChange={(e) => setTopic(e.target.value)}
                    />
                    <h2 className={styles.subHeading}>Room types</h2>
                    <div className={styles.roomTypes}>
                        <div
                            onClick={() => setRoomType('open')}
                            className={`${styles.typeBox} ${roomType === 'open' ? styles.active : ''
                                }`}
                        >
                            <img src={PIC_OPEN} alt="globe" />
                            <span>Open</span>
                        </div>
                        <div
                            onClick={() => setRoomType('social')}
                            className={`${styles.typeBox} ${roomType === 'social' ? styles.active : ''
                                }`}
                        >
                            <img src={PIC_SOCIAL} alt="social" />
                            <span>Social</span>
                        </div>
                        <div
                            onClick={() => setRoomType('private')}
                            className={`${styles.typeBox} ${roomType === 'private' ? styles.active : ''
                                }`}
                        >
                            <img src={PIC_PRIVATE} alt="lock" />
                            <span>Private</span>
                        </div>
                    </div>
                </div>
                <div className={styles.modalFooter}>
                    <h2>Start a room, open to everyone</h2>
                    <button
                        onClick={createRoom}
                        className={styles.footerButton}
                    >
                        <img src={IMG_GO} alt="celebration" />
                        <span>Let's go</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AddRoom;