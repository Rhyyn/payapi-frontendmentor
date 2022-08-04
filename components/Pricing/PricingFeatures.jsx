import React from "react";
import styles from "../../styles/Pricing/PricingFeatures.module.scss";

const PricingFeatures = (props) => {
    return (
        <React.Fragment>
            {props.isValid ? ( // check if true to display check icon
                <div className={styles.mainContainer}>
                    <div className = {styles.checkContainer}>
                        <img
                            src="/assets/shared/desktop/icon-check.svg"
                            className={styles.iconCheck}
                        ></img>
                    </div>
                    <p className={styles.textValid}>{props.name}</p>
                </div>
            ) : ( // else no check icon and lower opacity
                <div className={styles.mainContainer}>
                <div className = {styles.checkContainer}>
                    </div>
                    <p className={styles.textInvalid}>{props.name}</p>
                </div>
            )}
        </React.Fragment>
    );
};

export default PricingFeatures;
