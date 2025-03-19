// src/components/Footer.js

import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.support}>
                <h3>Поддержка</h3>
                <ul>
                    <li><a href="#">Email: support@example.com</a></li>
                    <li><a href="#">Телефон: +1234567890</a></li>
                </ul>
            </div>
            <div className={styles.policy}>
                <h3>Политика конфиденциальности</h3>
                <p><a href="#">Читать</a></p>
            </div>
        </footer>
    );
};

export default Footer;