import styles from "../styles/Home/Home.module.scss";
import Header from "../components/Header/Header";
import Intro from "../components/Home/Intro";
import Partners from "../components/Home/Partners";
import Implement from "../components/Home/Implement";
import SimpleUI from "../components/Home/SimpleUI";
import Perks from "../components/Home/Perks";
import ReadyToStart from "../components/Utilities/ReadyToStart";
import Footer from "../components/Utilities/Footer";
import React from "react";

export default function Home() {
    return (
        <React.Fragment>
            <section className={`${styles.main} ${styles.bgPattern}`}>
                <Header></Header>
                <Intro></Intro>
                <Partners></Partners>
                <Implement></Implement>
                <SimpleUI></SimpleUI>
                <Perks></Perks>
                <ReadyToStart></ReadyToStart>
                <Footer></Footer>
            </section>
        </React.Fragment>
    );
}
