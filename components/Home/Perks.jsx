import React from "react";
import styles from "../../styles/Home/Perks.module.scss";

const Perks = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.individualContainer}>
                <img
                    className={styles.image}
                    src="/assets/home/desktop/icon-personal-finances.svg"
                    alt="personal finances icon"
                />
                <h4 className={styles.Title}>Personal Finances</h4>
                <p className={styles.Text}>
                    Consolidate financial data from multiple sources and
                    categorize transactions up to 2 years of history. Analyze
                    reports to reconcile activities in your account.
                </p>
            </div>
            <div className={styles.individualContainer}>
                <img
                    className={styles.image}
                    src="/assets/home/desktop/icon-banking-and-coverage.svg"
                    alt="banking icon"
                />
                <h4 className={styles.Title}>Banking & Coverage</h4>
                <p className={styles.Text}>
                    With our platform, you can speed up account onboarding and
                    support ongoing payments for checking, savings, credit card,
                    and brokerage accounts.
                </p>
            </div>
            <div className={styles.individualContainer}>
                <img
                    className={styles.image}
                    src="/assets/home/desktop/icon-consumer-payments.svg"
                    alt="consumer payment icon"
                />
                <h4 className={styles.Title}>Consumer Payments</h4>
                <p className={styles.Text}>
                    It’s easier to set up secure bank payments with us through a
                    flow designed with the user experience in mind. Customers
                    could instantly authenticate their account.
                </p>
            </div>
        </div>
    );
};

export default Perks;
