import React, { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.scss";
import Image from "next/image";

const NavBar = () => {
  const navItems = ["Pricing", "About", "Contact"]
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
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


    // console.log(windowDimensions.width + " " + windowDimensions.height);
    return (
        <React.Fragment>
            {windowSize.width >= 720 ? (
                <div className={styles.navBarContainer}>
                    {navItems.map((item, index) => {
                        return <li key={index}>{item}</li>;
                    })}
                </div>
            ) : <Image className={styles.menuIcon} src="/menu.svg" width={28} height={17}></Image>}
        </React.Fragment>
    );
};

export default NavBar;
