import React from "react";
import styles from "../../styles/Home/SimpleUI.module.scss";

const SimpleUI = () => {
    return (
        <div className={`${styles.mainContainer} ${styles.bgPattern}`}>
            <div className={styles.TextContainer}>
                <h3 className={styles.Title}>Simple UI & UX</h3>
                <p className={styles.Text}>
                    Our pre-built form is easy to integrate in your app or
                    website’s checkout flow and designed to optimize conversion.
                </p>
            </div>
            <img
                className={styles.image}
                src="/assets/home/desktop/illustration-simple-ui.svg"
            />
        </div>
    );
};

export default SimpleUI;
