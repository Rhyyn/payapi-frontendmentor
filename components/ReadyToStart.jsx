import React from "react";
import styles from "../styles/ReadyToStart.module.scss";
import Input from "./Input.jsx";

const ReadyToStart = () => {
    return (
        <div className={styles.mainContainer}>
            <h1 className={styles.Title}>Ready to start?</h1>
            <Input></Input>
        </div>
    );
};

export default ReadyToStart;
