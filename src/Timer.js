import React, { useState } from "react";
import "./Time.css"

const Timer = () => {
  const [time, setTime] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const startTimer = () => {
    if (!intervalId) {
      const id = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 800);
      setIntervalId(id);
    }
  };

  const stopTimer = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  const resetTimer = () => {
    stopTimer(); // Ensures interval is cleared before resetting
    setTime(0);
  };

  // Format time as HH:MM:SS:ms
  const formatTime = (seconds) => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${hrs}:${mins}:${secs}`;
  };

  return (
    <div className="stopwatch-container">
    <h1 className="stopwatch-title">Stopwatch</h1>
    <p className="stopwatch-display">{formatTime(time)}</p>
    <div className="stopwatch-buttons">
      <button onClick={startTimer} className="stopwatch-button start-button">Start</button>
      <button onClick={stopTimer} className="stopwatch-button stop-button">Stop</button>
      <button onClick={resetTimer} className="stopwatch-button reset-button">Reset</button>
    </div>
  </div>
  
  );
};

export default Timer;
