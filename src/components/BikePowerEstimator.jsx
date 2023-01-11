import React, { useRef } from "react";
import styles from "./BikePowerEstimator.module.css"

const BikePowerEstimator = () => {
    const inputWeightRef = useRef(0);
    const inputPowerRef = useRef(0);

    const convertedWeightkg = inputWeightRef.current.value * 0.45359237
    console.log(convertedWeightkg)
    console.log(inputPowerRef.current.value)
    const result = inputPowerRef.current.value/convertedWeightkg  

    return (
        <div className={styles.container}>
            <h1>Bike Power Estimator</h1>
            <div>
            <label htmlFor="weight">Weight: lbs</label>
            <input type="number" name="weight" ref={inputWeightRef}/>
            </div>
            <div>
            <label htmlFor="power">Power</label>
            <input type="number" name="power" ref={inputPowerRef}/>
            
            </div>
            <button >Calculate</button>
            <div className={styles.result}>
                <h2>Power: {result}</h2>

            </div>
           
        </div>

    )


}

export default BikePowerEstimator