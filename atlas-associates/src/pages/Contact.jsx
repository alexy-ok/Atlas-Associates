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

            <div className={styles.form}>
                <form name="contact" method="post" data-netlify="true" onSubmit="submit">
                    <input type="hidden" name="contact-form" value="contact"/>
                    <div>
                        <label> Full Name
                            <input type="text" name="full-name" required/>
                        </label>
                        <label> Email
                            <input type="email" name="email" required/>
                        </label>
                        <label> Phone Number
                            <input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/>
                        </label>
                        <label> Project Address
                            <input type="text" name="project-address"/>
                        </label>
                        <label for="spouse-name"> Spouse/Partner’s Name (if applicable): </label>
                        <input id="spouse-name" type="text" name="spouse-name"/>


                        <br/><br/>
                        <label for="budget">What is your estimated budget for the construction project?</label>
                        <br/>
                        <div className={styles.inlineinputs}>
                            <input type="radio" id="budget1" name="budget" value="less than $10,000"/>
                            <label for="budget1">less than $10,000</label>
                        </div>
                        <br/>
                        <div className={styles.inlineinputs}>
                            <input type="radio" id="budget2" name="budget" value="$10,000 - $200,000"/>
                            <label for="budget2">$10,000 - $200,000</label>
                        </div>
                        <br/>
                        <div className={styles.inlineinputs}>
                            <input type="radio" id="budget3" name="budget" value="$200,000 - $300,000"/>
                            <label for="budget3">$200,000 - $300,000</label>
                        </div>
                        <br/>
                        <div className={styles.inlineinputs}>
                            <input type="radio" id="budget4" name="budget" value="$300,000 - $500,000"/>
                            <label for="budget4">$300,000 - $500,000</label>
                        </div>
                        <br/>
                        <div className={styles.inlineinputs}>
                            <input type="radio" id="budget5" name="budget" value="$500,000 - $1,000,000"/>
                            <label for="budget5">$500,000 - $1,000,000</label>
                        </div>
                        <br/>
                        <div className={styles.inlineinputs}>
                            <input type="radio" id="budget6" name="budget" value="over $2,000,000"/>
                            <label for="budget6">over $2,000,000</label>
                        </div>
                        <br/><br/>

                        <label for="schedule">If you have a schedule in mind, please explain below:</label><br/>
                        <div className={styles.inlineinputs}>
                        <label for="scheduleMonths">I’d like to start construction on this project in:</label>
                       
                        <input type="text" id="scheduleMonths" name="scheduleMonths" className={styles.halfInput}/> months<br/><br/>
                        </div>

                        <label for="existingPlans">If you are doing a remodel or addition, do you have any existing plans of the house? (please mark all that apply):</label><br/>
                        <div className={styles.inlineinputs}>
                        <input type="checkbox" id="noPlans" name="existingPlans" value="I don’t have any plans"/>
                        <label for="noPlans">I don’t have any plans</label><br/>
                        </div>
                        <div className={styles.inlineinputs}>
                        <input type="checkbox" id="physicalPlans" name="existingPlans" value="I have physical copies of the plans (like old blueprints)"/>
                        <label for="physicalPlans">I have physical copies of the plans</label><br/>
                        </div>
                        <div className={styles.inlineinputs}>
                        <input type="checkbox" id="digitalPlans" name="existingPlans" value="I have digital copies of the plans (like .dwg or .pdf files)"/>
                        <label for="digitalPlans">I have digital copies of the plans</label><br/>
                        </div>
                        <div className={styles.inlineinputs}>
                        <input type="checkbox" id="selfDrawnPlans" name="existingPlans" value="I drew up the plans myself"/>
                        <label for="selfDrawnPlans">I drew up the plans myself</label><br/><br/>
                        </div>
                        <label for="additionalInfo">Anything else you care to share about your project?</label><br/>
                        <textarea id="additionalInfo" name="additionalInfo"></textarea><br/><br/>

                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;