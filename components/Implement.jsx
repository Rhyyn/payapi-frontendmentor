import React from "react";
import styles from "../styles/Implement.module.scss";

const Implement = () => {
    return (
        <div className={styles.mainContainer}>
            <img className = {styles.image} src="/illustration-easy-to-implement.svg" />
            <div className = {styles.TextContainer}>
                <h3 className={styles.Title}>Easy to implement</h3>
                <p className = {styles.Text}>
                    Our API comes with just a few lines of code. You’ll be up
                    and running in no time. We built our documentation page to
                    integrate payments functionality with ease.
                </p>
            </div>
        </div>
    );
};

export default Implement;
