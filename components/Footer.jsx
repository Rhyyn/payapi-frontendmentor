import React from "react";
import styles from "../styles/Footer.module.scss";
import Image from "next/image";

const navItems = ["Pricing", "About", "Contact"];

const Footer = () => {
    return (
        <div className={styles.footerContainer}>
            <div className={styles.mainContainer}>
                <div className = {styles.leftContainer}>
                    <Image
                        className={styles.logo}
                        src="/footerLogo.svg"
                        width={135}
                        height={38}
                    ></Image>
                    <div className={styles.navContainer}>
                        {navItems.map((item, index) => {
                            return <li key={index}>{item}</li>;
                        })}
                    </div>
                </div>
                <div className={styles.socialsContainer}>
                    <img
                        className={styles.socialLogo}
                        src="/assets/shared/desktop/facebook.svg"
                    />
                    <img
                        className={styles.socialLogo}
                        src="/assets/shared/desktop/twitter.svg"
                    />
                    <img
                        className={styles.socialLogo}
                        src="/assets/shared/desktop/linkedin.svg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Footer;
