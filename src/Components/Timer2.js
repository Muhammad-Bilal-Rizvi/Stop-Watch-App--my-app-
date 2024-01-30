import React, { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  var timer;

  useEffect(() => {
    if (isRunning) {
      timer = setInterval(() => {
        setSeconds((prevSeconds) => {
          if (prevSeconds === 59) {
            setMinutes((prevMinutes) => prevMinutes + 1);
            return 0;
          } else {
            return prevSeconds + 1;
          }
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const start = () => {
    setIsRunning(true);
  };

  const restart = () => {
    setSeconds(0);
    setMinutes(0);
    setIsRunning(true);
  };

  const stop = () => {
    clearInterval(timer);
    setIsRunning(false);
  };

  return (
    <div className="timer">
      <div className="container">
        <div className="timerContainer">
          <h1 className="heading">Stop Watch</h1>
          <h1 className="heading">
            {minutes < 10 ? "0" + minutes : minutes}:
            {seconds < 10 ? "0" + seconds : seconds}
          </h1>
          <button className="start" onClick={start}>
            Start
          </button>
          <button className="restart" onClick={restart}>
            Restart
          </button>
          <button className="stop" onClick={stop}>
            Stop
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;

//copy chatgpt: