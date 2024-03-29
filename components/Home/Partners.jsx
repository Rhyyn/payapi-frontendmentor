import React from "react";
import styles from "../../styles/Home/Partners.module.scss";
const PartnersLogo = [
    {
        url: "/assets/shared/desktop/tesla.svg",
    },
    {
        url: "/assets/shared/desktop/microsoft.svg",
    },
    {
        url: "/assets/shared/desktop/hewlett-packard.svg",
    },
    {
        url: "/assets/shared/desktop/oracle.svg",
    },
    {
        url: "/assets/shared/desktop/google.svg",
    },
    {
        url: "/assets/shared/desktop/nvidia.svg",
    },
];

const Partners = () => {
    return (
        <div className={styles.partnersContainer}>
            <div className={styles.subPartnersContainer}>
                <div className={styles.partnersTitle}>
                    <h2>Who we work with</h2>
                    <p className={styles.partnersText}>
                        Today, millions of people around the world have
                        successfully connected their accounts to apps they love
                        using our API. We provide developers with the tools they
                        need to create easy and accessible experiences for their
                        users.
                    </p>
                    <button className={styles.buttonAbout}>About Us</button>
                </div>
                <div className={styles.partnersLogosContainer}>
                    {PartnersLogo.map((item, index) => {
                        return (
                            <img
                                className={styles.partnersLogo}
                                src={item.url}
                                key={index}
                                alt="partners logos"
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Partners;
