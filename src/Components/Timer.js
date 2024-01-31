import React, { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isStarted, setIsStarted] = useState(true);
  const [isStopped, setIsStopped] = useState(false);

  var timer;

  useEffect(() => {
    timer = setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds === 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
    }, 1000);

    return () => clearInterval(timer);
  });

  const restart = () => {
    setSeconds(0);
    setMinutes(0);
  };

  const stop = () => {
    setIsStopped(true);
    clearInterval(timer);
  };

  const resume = () => {};

  return (
    <div className="timer">
      <div className="container">
        <div className="timerContainer">
          <h1 className="heading">Stop Watch</h1>
          <h1 className="heading">
            {minutes < 10 ? "0" + minutes : minutes}:
            {seconds < 10 ? "0" + seconds : seconds}
          </h1>
          <button className="restart" onClick={restart}>
            Restart
          </button>
          {/* <button className="stop" onClick={stop}>Stop</button> */}
          
          {/* Ternary operator (if else) added to switch button from stop to resume */}
          {isStarted && !isStopped && (
            <button className="stop" onClick={stop}>
              Stop
            </button>
          )}

          {isStopped && (
            <button className="stop" onClick={resume}>
              Resume
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timer;

// {state ? <button>fdsgsg</button>: <></>}
