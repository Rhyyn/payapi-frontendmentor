import React from "react";
import styles from "../../styles/Contact/Form.module.scss";
import { useState } from "react";

const Form = () => {
    const [isChecked, setIsChecked] = useState(false);

    const over = () => {
        console.log("hover");
        console.log(isChecked);
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
                <textarea
                    className={styles.input + " " + styles.inputMessage}
                    type="text"
                    placeholder="Message"
                ></textarea>
                <div className={styles.checkboxContainer}>
                    {isChecked ? (
                        <div
                            className={styles.checkboxClicked}
                            role="checkbox"
                            onClick={() => {
                                setIsChecked(!isChecked)
                            }}
                        >
                            <img className = {styles.checkLogo} src="/assets/shared/desktop/icon-check.svg" />
                        </div>
                    ) : (
                        <div
                            className={styles.checkboxUnactive}
                            role="checkbox"
                            onClick={() => {
                                setIsChecked(!isChecked)
                            }}
                        ></div>
                    )}
                    <p className={styles.checkboxDesc}>
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
