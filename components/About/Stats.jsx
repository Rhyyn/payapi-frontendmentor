import React from "react";
import styles from "../../styles/About/Stats.module.scss";

const Stats = () => {
    return (
        <div className={styles.mainContainer + " " + styles.borderTop}>
            <div className={styles.individualContainer + " " + styles.paddingTop}>
                <h4 className={styles.statTitle}>Team Members</h4>
                <h1 className={styles.number}>300+</h1>
            </div>
            <div className={styles.individualContainer}>
                <h4 className={styles.statTitle}>Offices in the US</h4>
                <h1 className={styles.number}>3</h1>
            </div>
            <div
                className={
                    styles.individualContainer + " " + styles.borderBottom}>
                <h4 className={styles.statTitle}>Transactions analyzed</h4>
                <h1 className={styles.number}>10M+</h1>
            </div>
        </div>
    );
};

export default Stats;
