import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Partners from "../components/Partners";
import Implement from "../components/Implement";
import SimpleUI from "../components/SimpleUI";
import Perks from "../components/Perks";
import ReadyToStart from "../components/ReadyToStart";
import Footer from "../components/Footer";
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
            {/* <div className={styles.bgPattern}>
                <Image
                    src="/bg-pattern-circle.svg"
                    height={780}
                    width={780}
                ></Image>
            </div> */}
        </React.Fragment>
    );
}
