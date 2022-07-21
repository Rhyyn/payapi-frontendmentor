import React from "react";
import styles from "../styles/Input.module.scss";

const Input = () => {
    return (
        <div className={styles.emailInputContainer}>
            <form className = {styles.form}>
                <input
                    placeholder="Enter Email Adress"
                    className={styles.emailInput}
                    type="text"
                ></input>
                <button className = {styles.button}>Schedule a Demo</button>
            </form>
        </div>
    );
};

export default Input;
