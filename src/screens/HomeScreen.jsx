import React from "react";
import styles from "./HomeScreen.module.css"
import BikePowerEstimator from "../components/BikePowerEstimator";

const HomeScreen = () => {


    return (
        <div className={styles.container}>
            <h2>Home Screen</h2>
            <BikePowerEstimator />
        </div>
    )

}

export default HomeScreen;