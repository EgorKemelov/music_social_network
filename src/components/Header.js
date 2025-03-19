// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src="/logo.png" alt="Logo" />
            </div>
            <div className={styles.profile}>
                <img src="/profile-icon.png" alt="Profile" />
            </div>
            <Link to="/register" className={styles.registerLink}>Зарегистрироваться</Link>
            <button className={styles.logoutButton}>Выйти</button>
        </header>
    );
};

export default Header;