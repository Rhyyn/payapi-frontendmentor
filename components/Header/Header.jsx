import React from "react";
import styles from "../../styles/Header/Header.module.scss";
import NavBar from "./NavBar";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.mainNavContainer}>
                <Link href="/">
                    <Image
                        src="/logo.svg"
                        width={135}
                        height={38}
                        className={styles.logo}
                        alt="brand logo"
                    ></Image>
                </Link>
                <NavBar></NavBar>
            </div>
            <button className={styles.scheduleButton}>Schedule a Demo</button>
        </header>
    );
};

export default Header;
