// src/Timer.js
import React, { useState, useEffect } from 'react';

const Timer = ({ startTime }) => {
    const [timeLeft, setTimeLeft] = useState(startTime);

    useEffect(() => {
        const timer = setInterval(() => {
            if (timeLeft > 0) {
                setTimeLeft((prev) => prev - 1);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    return (
        <div>
            <h2>Time Left: {timeLeft} seconds</h2>
        </div>
    );
};

export default Timer;
