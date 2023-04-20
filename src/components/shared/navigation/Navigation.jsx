import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../../http';
import { IC_LOGOUT, LOGO, LOGO_TEXT, PIC_AVATAR_DEF } from '../../../utils'
import styles from './Navigation.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setAuth } from '../../../store/authSlice';
import ThemeMode from '../Themes/ThemeMode'

const Navigation = () => {
    const brandStyle = {
        color: '#fff',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '22px',
        display: 'flex',
        alignItems: 'center',
    };

    const logoText = {
        marginLeft: '10px',
    };
    const dispatch = useDispatch();
    const { isAuth, user } = useSelector((state) => state.auth);
    async function logoutUser() {
        try {
            const { data } = await logout();
            dispatch(setAuth(data));
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <nav className={`${styles.navbar} container`}>
            <Link style={brandStyle} to="/">
                <img src={LOGO} className='setu_logo' alt='logo' />
                <span className={styles.logoText}>{LOGO_TEXT}</span>
            </Link>
            {(
                <div className={styles.navRight}>
                    {isAuth && <h3>{user?.name}</h3>}
                    <Link to="/">
                        {isAuth && <img
                            className={styles.avatar}
                            src={
                                user.avatar
                                    ? user.avatar
                                    : { PIC_AVATAR_DEF }
                            }
                            width="40"
                            height="40"
                            alt="avatar"
                        />}
                    </Link>
                    <div className={`${styles.navToggleMain}`}>
                        <ThemeMode />
                    </div>
                    {isAuth && <button
                        className={styles.logoutButton}
                        onClick={logoutUser}
                    >
                        <img src={IC_LOGOUT} alt="logout" />
                    </button>}
                </div>
            )}
        </nav>
    );
};

export default Navigation;
