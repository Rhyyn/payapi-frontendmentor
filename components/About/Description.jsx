import React from "react";
import styles from "../../styles/About/Description.module.scss";

const Description = () => {
    return (
        <div className={styles.mainContainer}>
            <h2 className={styles.title}>We empower </h2>
            <h2 className={styles.title}>innovators</h2>
            <h2 className={styles.title}>by delivering access to</h2>
            <h2 className={styles.title}>the financial system</h2>
            <div className = {styles.paragraphContainer}>
                <h3 className={styles.paragraphTitle}>Our Vision</h3>
                <p className={styles.paragraph}>
                    Our main goal is to build beautiful consumer experiences
                    along with developer-friendly infrastructure. The result is
                    an intelligent tool that gives everyone the ability to
                    create amazing products that solve big problems. We are
                    deeply focused on democratizing financial services through
                    technology.
                </p>
            </div>
            <div className = {styles.paragraphContainer}>
                <h3 className={styles.paragraphTitle}>Our Business</h3>
                <p className={styles.paragraph}>
                    At the core of our platform is the technical infrastructure
                    APIs that connect consumers. Our innovative product provides
                    key insights for businesses and individuals, as well as
                    robust reporting for traditional financial institutions and
                    developers.
                </p>
            </div>

            <div className={styles.image}></div>
        </div>
    );
};

export default Description;
