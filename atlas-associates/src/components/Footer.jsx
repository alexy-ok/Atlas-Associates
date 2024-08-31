import React from 'react';

import styles from '../styles/Footer.module.css';


function Footer() {
  
    return (
        <>
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <p>©Atlas Associates 2024. All rights reserved.</p>
                <div className={styles.right}>
                    <p>Phone: (206)488-3688</p>
                    <p>Email: gengtan@gmail.com</p>
                </div>
            </div>
        </footer>
        </>
    );
}

export default Footer;