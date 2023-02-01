import React, { useState, useEffect } from "react";

const CountDown = () => {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const futureDate = new Date("2023-04-09T00:00:00").getTime();
    const intervalId = setInterval(() => {
      const currentTime = new Date().getTime();
      setTimeLeft(futureDate - currentTime);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <div>
      <p>Countdown until April 9th, 2023:</p>
      <p>{days} days {hours} hours {minutes} minutes {seconds} seconds</p>
    </div>
  );
};

export default CountDown;
