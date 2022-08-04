import React from "react";
import PricingFeatures from "./PricingFeatures";
import styles from "../../styles/Pricing/PlanPricing.module.scss";


const PlanPricing = (props) => {
    return (
        <div className={styles.mainContainer}>
            <h3 className={styles.planName}>{props.data.Name}</h3>
            <h1 className={styles.price}>{props.data.Price}</h1>
            <div className = {styles.featuresContainer}>
                {props.data.Features.map((item, index) => { // for each Feature render this component
                    return (
                        <PricingFeatures
                            name={item.Name}
                            isValid={item.Boolean}
                            key={index}
                        ></PricingFeatures>
                    );
                })}
            </div>
            <button className = {styles.button}>Request Access</button>
        </div>
    );
};

export default PlanPricing;
