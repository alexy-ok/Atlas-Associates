import { useState } from 'react';
import styles from '../styles/Contact.module.css';

function Contact() {
    return (
        <div>
            <div className={styles.banner}>
                <h1 className={styles.header}>Contact Us</h1>
            </div>
            
            <div className={styles.text}>
                <p>For more information, please contact us at:</p>
                <p>Phone: 206-488-3688</p>
                <p>Email: gengtan@gmail.com</p>
            </div>
        </div>
    );
}

export default Contact;
