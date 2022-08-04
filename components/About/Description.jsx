import React from "react";
import styles from "../../styles/About/Description.module.scss";

const Description = () => {
    return (
        <div className = {styles.mainContainer}>
            <h2 className = {styles.title}>We Empower innovators by delivering access to the financial system</h2>
            <h3 className = {styles.paragraphTitle}>Our Vision</h3>
            <p className = {styles.paragraph}>Our main goal is to build beautiful consumer experiences along with developer-friendly infrastructure. The result is an intelligent tool that gives everyone the ability to create amazing products that solve big problems. We are deeply focused on democratizing financial services through technology. </p>
            <h3 className = {styles.paragraphTitle}>Our Business</h3>
            <p className = {styles.paragraph}>At the core of our platform is the technical infrastructure APIs that connect consumers. Our innovative product provides key insights for businesses and individuals, as well as robust reporting for traditional financial institutions and developers. </p>
        </div>
    );
};

export default Description;
