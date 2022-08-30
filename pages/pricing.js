import React from "react";
import Header from "../components/Header/Header";
import PlanPricing from "../components/Pricing/PlanPricing";
import ReadyToStart from "../components/Utilities/ReadyToStart";
import Footer from "../components/Utilities/Footer";
import styles from "../styles/Pricing/Pricing.module.scss";

// Data of the 3 available Plans
const plans = [
    {
        Name: "Free Plan",
        Price: "$0.00",
        Features: [
            {
                Name: "Transactions",
                Boolean: true,
            },
            {
                Name: "Auth",
                Boolean: true,
            },
            {
                Name: "Identity",
                Boolean: true,
            },
            {
                Name: "Investments",
                Boolean: false,
            },
            {
                Name: "Assets",
                Boolean: false,
            },
            {
                Name: "Liabilities",
                Boolean: false,
            },
            {
                Name: "Income",
                Boolean: false,
            },
        ],
    },
    {
        Name: "Basic Plan",
        Price: "$249.00",
        Features: [
            {
                Name: "Transactions",
                Boolean: true,
            },
            {
                Name: "Auth",
                Boolean: true,
            },
            {
                Name: "Identity",
                Boolean: true,
            },
            {
                Name: "Investments",
                Boolean: true,
            },
            {
                Name: "Assets",
                Boolean: true,
            },
            {
                Name: "Liabilities",
                Boolean: false,
            },
            {
                Name: "Income",
                Boolean: false,
            },
        ],
    },
    {
        Name: "Premium Plan",
        Price: "$499.00",
        Features: [
            {
                Name: "Transactions",
                Boolean: true,
            },
            {
                Name: "Auth",
                Boolean: true,
            },
            {
                Name: "Identity",
                Boolean: true,
            },
            {
                Name: "Investments",
                Boolean: true,
            },
            {
                Name: "Assets",
                Boolean: true,
            },
            {
                Name: "Liabilities",
                Boolean: true,
            },
            {
                Name: "Income",
                Boolean: true,
            },
        ],
    },
];

const pricing = () => {
    return (
        <React.Fragment>
            <section className={`${styles.main} ${styles.bgPattern}`}>
                <Header></Header>
                <h1 className={styles.title}>Pricing</h1>
                <div className={styles.plansContainer}>
                    {plans.map((item, index) => {
                        return (
                            <PlanPricing data={item} key={index}></PlanPricing>
                        );
                    })}
                </div>
                <ReadyToStart></ReadyToStart>
            </section>
            <section className={`${styles.footerSection} ${styles.bgPattern}`}>
                <Footer></Footer>
            </section>
        </React.Fragment>
    );
};

export default pricing;
