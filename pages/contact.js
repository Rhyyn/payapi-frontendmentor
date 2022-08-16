import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Utilities/Footer";
import ReadyToStart from "../components/Utilities/ReadyToStart";
import ContactPartners from "../components/Contact/ContactPartners";
import Form from "../components/Contact/Form";
import styles from "../styles/Contact/Contact.module.scss";

const contact = () => {
    return (
        <div className={styles.main}>
            <Header></Header>
            <div className={styles.mainContainer}>
                <div className = {styles.titleContainer}>
                    <h1 className={styles.title}>
                        Submit a help request and we'll get in touch shortly.
                    </h1>
                </div>
                <div className={styles.formPartnersContainer}>
                    <Form></Form>
                    <div className={styles.partnersContainer}>
                        <h2 className={styles.partnersTitle}>
                            Join the thousands of innovators already building
                            with us
                        </h2>
                        <ContactPartners></ContactPartners>
                    </div>
                </div>
                <ReadyToStart></ReadyToStart>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default contact;
