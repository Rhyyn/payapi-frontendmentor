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
                                <label>Enter email adress</label>
                                <input type="text"></input>
                            </form>
                            <button>Schedule a Demo</button>
                        </div>
                        <div className = {styles.contactTextContainer}>
                            <h5>Have Any Questions?</h5>
                            <h5>Contact Us</h5>
                        </div>
                    </div>
                    <div>
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
