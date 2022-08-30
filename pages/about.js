import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Utilities/Footer";
import ReadyToStart from "../components/Utilities/ReadyToStart";
import Description from "../components/About/Description";
import Stats from "../components/About/Stats";
import Environment from "../components/About/Environment";
import styles from "../styles/About/About.module.scss";

const about = () => {
    return (
        <React.Fragment>
            <section className={`${styles.main} ${styles.bgPattern}`}>
                <Header></Header>
                <div className={styles.mainContainer}>
                    <Description></Description>
                    <Stats></Stats>
                    <Environment></Environment>
                    <ReadyToStart></ReadyToStart>
                </div>
            </section>
            <section className={`${styles.footerSection} ${styles.bgPattern}`}>
                <Footer></Footer>
            </section>
        </React.Fragment>
    );
};

export default about;
