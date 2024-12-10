import React, { useState, useEffect } from 'react';
import Button from "./Button.jsx";


const Counter = ({ increment}) => {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const maxValue = 20;

    useEffect(() => {
        let timer;
        if (isRunning && count < maxValue) {
            timer = setInterval(() => {
                setCount((prevCount) => prevCount + increment);
            }, 1000);
        }
        if (count >= maxValue) {
            setIsRunning(false);
        }
        return () => clearInterval(timer);
    }, [isRunning, count, increment, maxValue]);

    const handleStart = () => setIsRunning(true);
    const handleStop = () => setIsRunning(false);
    const resetCounter = () => setCount(0);

    return (<>
        <h3>Compteur ({increment}/+{maxValue})</h3>
        <p>Valeur : {count}</p>
        <Button fn={handleStart} text={"Start"} disb={isRunning || count >= maxValue}/>
        <Button fn={handleStop} text={"Stop"} disb={!isRunning}/>
        <Button fn={resetCounter} text={"Reset"} disb={count === 0}/>
    </>
    );
};

export default Counter;
