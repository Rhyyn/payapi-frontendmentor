import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Header from "../components/Header";
import React from "react";

export default function Home() {
    return (
        <React.Fragment>
            <div className={styles.main}>
                <Header></Header>
            </div>
            <div className={styles.bgPattern}>
                <Image
                    src="/bg-pattern-circle.svg"
                    height={780}
                    width={780}
                ></Image>
            </div>
        </React.Fragment>
    );
}
