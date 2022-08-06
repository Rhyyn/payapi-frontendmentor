import React from "react";
import styles from "../../styles/About/Environment.module.scss";

const Environment = () => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.paragraphContainer}>
                <h3 className={styles.paragraphTitle}>The Culture</h3>
                <p className={styles.paragraph}>
                    We strongly believe there's always an opportunity to learn
                    from each other outside of day-to-day work, whether it's
                    company-wide offsites, internal hackathons, or co-worker
                    meetups. We always value cross-team collaboration and
                    diversity of thought, no matter the job title.
                </p>
            </div>
            <div className={styles.paragraphContainer}>
                <h3 className={styles.paragraphTitle}>The People</h3>
                <p className={styles.paragraph}>
                    We're all passionate about building a more efficient and
                    inclusive financial infrastructure together. At PayAPI, we
                    have diverse backgrounds and skills.
                </p>
            </div>

            <div className={styles.image}></div>
        </div>
    );
};

export default Environment;
