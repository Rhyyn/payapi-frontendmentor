import React from "react";
import Header from "../components/Header";
import PlanPricing from "../components/Pricing/PlanPricing";
import ReadyToStart from "../components/ReadyToStart";
import Footer from "../components/Footer";

const plans = [
    {
        Name: "Free Plan",
        Price: "$0.00",
        Features: [
            {
                Name: "Transactions",
                Boolean: true,
            },
            {
                Name: "Auth",
                Boolean: true,
            },
            {
                Name: "Identity",
                Boolean: true,
            },
            {
                Name: "Investments",
                Boolean: false,
            },
            {
                Name: "Assets",
                Boolean: false,
            },
            {
                Name: "Liabilities",
                Boolean: false,
            },
            {
                Name: "Income",
                Boolean: false,
            },
        ],
    },
    {
        Name: "Basic Plan",
        Price: "$249.00",
        Features: [
            {
                Name: "Transactions",
                Boolean: true,
            },
            {
                Name: "Auth",
                Boolean: true,
            },
            {
                Name: "Identity",
                Boolean: true,
            },
            {
                Name: "Investments",
                Boolean: true,
            },
            {
                Name: "Assets",
                Boolean: true,
            },
            {
                Name: "Liabilities",
                Boolean: false,
            },
            {
                Name: "Income",
                Boolean: false,
            },
        ],
    },
    {
        Name: "Premium Plan",
        Price: "$499.00",
        Features: [
            {
                Name: "Transactions",
                Boolean: true,
            },
            {
                Name: "Auth",
                Boolean: true,
            },
            {
                Name: "Identity",
                Boolean: true,
            },
            {
                Name: "Investments",
                Boolean: true,
            },
            {
                Name: "Assets",
                Boolean: true,
            },
            {
                Name: "Liabilities",
                Boolean: true,
            },
            {
                Name: "Income",
                Boolean: true,
            },
        ],
    },
];


const pricing = () => {
    return (
        <div>
            <Header></Header>
            {plans.map((item, index) => {
                return (<PlanPricing data={item} key={index}></PlanPricing>)
            })}
            {/* {plans[0].Free.map((item, index) => {
                return (
                    <PlanPricing
                        name={item.Name}
                        price={item.Price}
                        key={index}
                    ></PlanPricing>
                );
            })} */}
            <ReadyToStart></ReadyToStart>
            <Footer></Footer>
        </div>
    );
};

export default pricing;
