import React, { useEffect, useState } from "react";


const Countdown = () => {
  const targetDate = new Date("2025-07-17T00:00:00"); // Set your event start date
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(interval);
  });

  return (
    <div className="countdown-container text-center text-indigo-700 dark:text-blue-300 py-10">
      <h2 className="text-2xl font-bold mb-4">⏳ Countdown to Tall Ships Races 2025</h2>
      <div className="flex justify-center gap-6 text-3xl font-semibold">
        <div><span>{timeLeft.days}</span><div className="text-sm">Days</div></div>
        <div><span>{timeLeft.hours}</span><div className="text-sm">Hours</div></div>
        <div><span>{timeLeft.minutes}</span><div className="text-sm">Minutes</div></div>
        <div><span>{timeLeft.seconds}</span><div className="text-sm">Seconds</div></div>
      </div>
    </div>
  );
};

export default Countdown;
