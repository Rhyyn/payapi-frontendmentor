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
                <div className={styles.mainContainer}>
                    <div className={styles.sloganContainer}>
                        <h1 className={styles.slogan}>
                            Start building with our APIs for absolutely free.
                        </h1>
                        <div className={styles.emailInputContainer}>
                            <form>
                                <input
                                    placeholder="Enter Email Adress"
                                    className={styles.emailInput}
                                    type="text"
                                ></input>
                            </form>
                            <button>Schedule a Demo</button>
                        </div>
                        <div className={styles.contactTextContainer}>
                            <p>Have Any Questions?</p>
                            <p>
                                <strong>Contact Us</strong>
                            </p>
                        </div>
                    </div>
                    <div className = {styles.phoneContainer}>
                        <img src="/illustration-phone-mockup.svg" />
                    </div>
                </div>
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
