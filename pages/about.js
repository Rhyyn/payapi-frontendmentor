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
        <div className = {styles.main}>
            <Header></Header>
            <div className={styles.mainContainer}>
                <Description></Description>
                <Stats></Stats>
                <Environment></Environment>
                <ReadyToStart></ReadyToStart>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default about;
