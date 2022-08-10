import React from "react";
import styles from "../../styles/Contact/Form.module.scss";

const Form = () => {
    return (
        <div className={styles.mainContainer}>
            <form className={styles.form}>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Name"
                ></input>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Email Adress"
                ></input>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Company Name"
                ></input>
                <input
                    className={styles.input}
                    type="text"
                    placeholder="Title"
                ></input>
                <input
                    className={styles.input + " " + styles.inputMessage}
                    type="text"
                    placeholder="Message"
                ></input>
                <div className = {styles.checkboxContainer}>
                    <input className = {styles.checkbox} type="checkbox"></input>
                    <p className = {styles.checkboxDescription}>
                        Stay up-to-date with company announcements and updates
                        to our API
                    </p>
                </div>
            </form>
        </div>
    );
};

export default Form;
