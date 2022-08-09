import React from "react";
import styles from "../../styles/Contact/ContactPartners.module.scss";

const PartnersLogo = [
    {
        url: "/assets/shared/desktop/Contact/teslaContact.svg",
    },
    {
        url: "/assets/shared/desktop/Contact/microsoftContact.svg",
    },
    {
        url: "/assets/shared/desktop/Contact/hewlett-packardContact.svg",
    },
    {
        url: "/assets/shared/desktop/Contact/oracleContact.svg",
    },
    {
        url: "/assets/shared/desktop/Contact/googleContact.svg",
    },
    {
        url: "/assets/shared/desktop/Contact/nvidiaContact.svg",
    },
];

const Partners = () => {
    return (
        <div className={styles.partnersContainer}>
            {PartnersLogo.map((item, index) => {
                return (
                    <img
                        className={styles.partnersLogo}
                        src={item.url}
                        key={index}
                    />
                );
            })}
        </div>
    );
};

export default Partners;
