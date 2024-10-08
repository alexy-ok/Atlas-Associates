import { useState } from 'react';
import styles from '../styles/Contact.module.css';
import ContactForm from '../components/ContactForm';
function Contact() {
    return (
        <div className={styles.page}>

            <title>Contact Us | Atlas Associates Architecture Bellevue Washington</title>

            <div className={styles.aboutSection}>
                <div className={styles.banner}>
                    <h1 className={styles.header}>About Us</h1>
                </div>

                <div className={styles.aboutLeft} hidden> 
                    <div className={styles.text}>
                        <h2>Our Story</h2>
                        <p>Geng Tan is originally from China after receiving her master of design in architecture at the WSU, she has practiced in the US and China for the last 27 years.  Geng has many professional credentials as AIA member, Cochair at SPARC with AIA, WA licensing and LEED Certified Architect.  She has experiences working with international architecture firms on varies types of projects in the US and China. Geng’s  experiences in  both US and China, which helps her to understand clients from Asian/Chinese backgrounds both language and culture and US culture and restrictions and rules.  She can provide a better service to both former and newer immigrants as well as people with different culture backgrounds. Her belief is architecture should fit clients’ lifestyles, connect to nature and site, and  represent owner’s character. It shall provide a sanction area for people to rest and rejuvenate, a place to reflect as well as interact and gathering with families and friends.</p>
                    </div>
                    <img src='./gengPortrait.jpg'/>
                </div>
                
                <div className={styles.aboutPerson}> 
                    <img src='./gengPortrait.jpg'/>
                    <div className={styles.text}>
                        <h2>Geng Tan</h2>
                        <p>Geng Tan is originally from China after receiving her master of design in architecture at the WSU, she has practiced in the US and China for the last 27 years.  Geng has many professional credentials as AIA member, Cochair at SPARC with AIA, WA licensing and LEED Certified Architect.  She has experiences working with international architecture firms on varies types of projects in the US and China. Geng’s  experiences in  both US and China, which helps her to understand clients from Asian/Chinese backgrounds both language and culture and US culture and restrictions and rules.  She can provide a better service to both former and newer immigrants as well as people with different culture backgrounds. Her belief is architecture should fit clients’ lifestyles, connect to nature and site, and  represent owner’s character. It shall provide a sanction area for people to rest and rejuvenate, a place to reflect as well as interact and gathering with families and friends.</p>
                     </div>                
                </div>
            </div>

            <div className={styles.contactSection} id="contact1">
                <div className={styles.banner}>
                    <h1 className={styles.header}>Stay in Touch</h1>
                </div>
                <div className={styles.contact}>
                        
                        <div className={styles.text}>

                            <h2>Atlas Associates:</h2>
                            <br/>
                            <p>Phone: 206-488-3688</p>
                            <p>Email: gengtan@gmail.com</p>
                        </div>
                    

                    <div className={styles.contactForm}>
                        <ContactForm/>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Contact;
