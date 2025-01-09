"use client";

import { useEffect, useState } from "react";

const Timer = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
    });

    const formatNumber = (number: any) => {
        return number < 10 ? `0${number}` : number;
    };

    useEffect(() => {
        const targetDate = new Date("2025-01-15T00:00:00Z");

        const interval = setInterval(() => {
            const now = new Date();
            const difference: number = targetDate.getTime() - now.getTime();

            if (difference <= 0) {
                clearInterval(interval);
            } else {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor(
                    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                const minutes = Math.floor(
                    (difference % (1000 * 60 * 60)) / (1000 * 60)
                );
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);

                setTimeLeft({
                    days: formatNumber(days),
                    hours: formatNumber(hours),
                    minutes: formatNumber(minutes),
                    seconds: formatNumber(seconds),
                });
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex items-center justify-center gap-2 sm:gap-4 flex-wrap mt-4">
            {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="flex flex-col items-center">
                    <span className="text-gray-600 text-xl sm:text-base mb-2">
                        {unit.charAt(0).toUpperCase() + unit.slice(1)}
                    </span>
                    <div className="rounded-2xl bg-orange-500 drop-shadow-lg px-2 py-1 sm:px-3 sm:py-2">
                        <p className="text-3xl md:text-6xl text-white font-bold">{value}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Timer;
