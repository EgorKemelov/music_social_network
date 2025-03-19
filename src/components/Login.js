// src/components/Login.js

import React from 'react';
import styles from './Login.module.css';

const Login = () => {
    return (
        <div className={styles.loginContainer}>
            <form className={styles.loginForm}>
                <h2>Вход</h2>
                <div className={styles.formGroup}>
                    <label htmlFor="login">Логин:</label>
                    <input type="text" id="login" name="login" required />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="password">Пароль:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Войти</button>
            </form>
        </div>
    );
};

export default Login;