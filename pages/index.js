import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import Header from "../components/Header";
import Partners from "../components/Partners";
import Implement from "../components/Implement";
import SimpleUI from "../components/SimpleUI";
import Perks from "../components/Perks";
import React, { useState, useEffect } from "react";

export default function Home() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    useEffect(() => {
        if (typeof window !== "undefined") {
            function handleResize() {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                });
            }
            window.addEventListener("resize", handleResize);
            handleResize();
            return () => window.removeEventListener("resize", handleResize);
        }
    }, []);
    return (
        <React.Fragment>
            <section className={`${styles.main} ${styles.bgPattern}`}>
                <Header></Header>
                {windowSize.width >= 1100 ? ( // -------------DESKTOP
                    <div className={styles.mainContainer}>
                        <div className={styles.sloganContainer}>
                            <h1 className={styles.slogan}>
                                Start building with our APIs for absolutely
                                free.
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
                        <div className={styles.phoneContainer}>
                            <img src="/illustration-phone-mockup.svg" />
                        </div>
                    </div>
                ) : (
                    // -------------TABLET
                    <div className={styles.mainContainerMobile}>
                        <div className={styles.phoneContainerMobile}>
                            <img
                                className={styles.phoneMockup}
                                src="/illustration-phone-mockup.svg"
                            />
                        </div>
                        <div className={styles.sloganContainerMobile}>
                            <h1 className={styles.slogan}>
                                Start building with our APIs for absolutely
                                free.
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
                    </div>
                )}
                <Partners></Partners>
                <Implement></Implement>
                <SimpleUI></SimpleUI>
                <Perks></Perks>
                {/* <div className={styles.partnerContainer}>

                </div> */}
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
