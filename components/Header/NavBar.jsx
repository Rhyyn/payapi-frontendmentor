import React, { useState, useEffect } from "react";
import styles from "../../styles/Header/Navbar.module.scss";
import Image from "next/image";

const NavBar = () => {
    const navItems = ["Pricing", "About", "Contact"];
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [closed, setIsClosed] = useState();

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

    const handleMenuOpen = () => {
        setIsMenuOpen(true);
    };

    const handleClass = () => {
        setIsClosed("");
        setIsMenuOpen(false);
    };
    const handleMenuClose = () => {
        setIsClosed(styles.menuBackgroundClose);
        setTimeout(handleClass, 350);
    };

    return (
        <React.Fragment>
            {windowSize.width >= 720 ? (
                <div className={styles.navBarContainer}>
                    {navItems.map((item, index) => {
                        return <li key={index}>{item}</li>;
                    })}
                </div>
            ) : null}
            {!isMenuOpen && windowSize.width <= 720 ? (
                <Image
                    onClick={handleMenuOpen}
                    className={styles.menuIcon}
                    src="/menu.svg"
                    width={28}
                    height={17}
                ></Image>
            ) : null}
            {isMenuOpen && windowSize.width <= 720 ? (
                <Image
                    onClick={handleMenuClose}
                    className={styles.menuIcon}
                    src="/close.svg"
                    width={22}
                    height={23}
                ></Image>
            ) : null}
            {isMenuOpen && windowSize.width <= 720 ? (
                <div className={`${styles.menuBackground} ${closed}`}>
                    <hr className={styles.line}></hr>
                    <div className={styles.menuItems}>
                        {navItems.map((item, index) => {
                            return <li key={index}>{item}</li>;
                        })}
                    </div>
                    <button className={styles.scheduleButton}>Schedule a Demo</button>
                </div>
            ) : null}
        </React.Fragment>
    );
};

export default NavBar;
