import React from "react";
import styles from "../styles/ReadyToStart.module.scss";

const ReadyToStart = () => {
    return (
        <div className = {styles.mainContainer}>
            <h1 className={styles.Title}>Ready to start?</h1>
            <div className={styles.emailInputContainer}>
                <form>
                    <input
                        placeholder="Enter Email Adress"
                        className={styles.emailInput}
                        type="text"
                    ></input>
                </form>
                <button>Schedule a Demo</button>
            </div>
        </div>
    );
};

export default ReadyToStart;
