import React, { useState, useEffect } from "react";

function CountdownTimer() {
  const [countDownDate, setCountDownDate] = useState(
    new Date("2024-02-13 18:00:00")
  ); // Target date and time
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const distance = countDownDate.getTime() - now.getTime();

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(intervalId);
      }
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup function
  }, [countDownDate]);

  return (
    <div>
      <p style={{ color: "inherit" }}>
        {countDownDate > new Date() ? (
          <span>
            <span style={{ color: "red" }}>{timeLeft.days}</span> Day
            {timeLeft.days > 1 && "s"}
            {timeLeft.days > 0 && timeLeft.hours > 0 && " : "}
            <span style={{ color: "red" }}>{timeLeft.hours}</span> Hour
            {timeLeft.hours > 1 && "s"}
            {timeLeft.hours > 0 && timeLeft.minutes > 0 && " : "}
            <span style={{ color: "red" }}>{timeLeft.minutes}</span> Minute
            {timeLeft.minutes > 1 && "s"}
            {timeLeft.minutes > 0 && timeLeft.seconds > 0 && " : "}
            <span style={{ color: "red" }}>{timeLeft.seconds}</span> Second
            {timeLeft.seconds > 1 && "s"}
          </span>
        ) : (
          <span>Time's up!</span>
        )}
      </p>
    </div>
  );
}

export default CountdownTimer;
