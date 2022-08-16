import React from "react";
import styles from "../../styles/Contact/Form.module.scss";
import { useState } from "react";

const Form = () => {
    const [isChecked, setIsChecked] = useState(false);

    const getStyle = () => {
        if (isChecked) return styles.checkbox + styles.checkboxActive;
        else return styles.checkbox + "";
    };
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
                <div className={styles.checkboxContainer}>
                    <input
                        className={styles.checkbox}
                        type="checkbox"
                        onChange={() => {
                            setIsChecked(!isChecked);
                        }}
                    ></input>
                    {/* <span className={styles.checkbox + `${isChecked ? styles.checkboxActive : ""}`} aria-hidden="true" /> */}
                    <span className={`${styles.checkbox} ${isChecked ? styles.checkboxActive : "undefined"}`} aria-hidden="true" />
                    <p className={styles.checkboxDescription}>
                        Stay up-to-date with company announcements and updates
                        to our API
                    </p>
                </div>
                <button className={styles.submitButton}>Submit</button>
            </form>
        </div>
    );
};

// `styles.checkbox ${isChecked ? "styles.checkbox--active" : "" }`

export default Form;
