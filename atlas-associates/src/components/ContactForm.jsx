import styles from "../styles/ContactForm.module.css"
function ContactForm(){

    return(
        <div className = "Form">
            <form className={styles.form} name="contact" method="post">
                <input type="hidden" name="form-name" value="contact"/>
                <b>Full Name<span className={styles.highlight}>*</span></b>
                <input required type="text" name="name"  placeholder="Your Full Name"/>
                <b>Email Address<span className={styles.highlight}>*</span></b>
                <input required type="email" name="email" placeholder="Your Email Address"/>
                <b>Message<span className={styles.highlight}>*</span></b>
                <textarea required name="message" placeholder="Message Here..." cols="30" rows="10"/>
                <button type="submit" className={styles.button}><b>Send Message</b></button>
            </form>
        
        </div>
    );
}

export default ContactForm;