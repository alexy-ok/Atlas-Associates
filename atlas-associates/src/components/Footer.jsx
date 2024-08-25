import React from 'react';

import styles from '../styles/Footer.module.css';


function Footer() {
  
    return (
        <>
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <p>©Atlas Associates 2024. All rights reserved.</p>
            </div>
        </footer>
        </>
    );
}

export default Footer;