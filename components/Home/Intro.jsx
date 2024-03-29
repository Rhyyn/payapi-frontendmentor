import React from "react";
import styles from "../../styles/Home/Intro.module.scss";
import Input from "../Home/Input";

const Intro = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.sloganContainer}>
                <h1 className={styles.slogan}>
                    Start building with our APIs for absolutely free.
                </h1>
                <Input></Input>
                <div className={styles.contactTextContainer}>
                    <p>Have Any Questions?</p>
                    <p>
                        <strong>Contact Us</strong>
                    </p>
                </div>
            </div>
            <div className={styles.phoneContainer}>
                <img src="/illustration-phone-mockup.svg" alt="illustration of a phone" />
            </div>
        </div>
    );
};

export default Intro;
