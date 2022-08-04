import React from "react";
import styles from "../../styles/Utilities/ReadyToStart.module.scss";
import Input from "../Home/Input";

const ReadyToStart = () => {
    return (
        <div className={styles.mainContainer}>
            <h1 className={styles.Title}>Ready to start?</h1>
            <Input></Input>
        </div>
    );
};

export default ReadyToStart;
