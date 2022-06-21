import React from "react";
import styles from "../styles/Header.module.scss";
import NavBar from "./NavBar";
import Image from "next/image";

const Header = () => {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.mainNavContainer}>
                <Image src="/logo.svg" width={135} height={38}></Image>
                <NavBar></NavBar>
            </div>
            <button className = {styles.scheduleButton}>Schedule a Demo</button>
        </header>
    );
};

export default Header;
