import React, { useState, useEffect, useRef } from "react";

function StopWatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isRunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }
    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isRunning]);

  function start() {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  }
  function stop() {
    setIsRunning(false);
  }
  function reset() {
    setElapsedTime(0);
    setIsRunning(false);
  }
  function foramtTime() {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);

    hours = String(hours).padStart(2, 0);
    minutes = String(minutes).padStart(2, 0);
    seconds = String(seconds).padStart(2, 0);
    milliseconds = String(milliseconds).padStart(2, 0);

    return ` ${minutes}:${seconds}:${milliseconds} `;
  }

  return (
    <div className="grid justify-items-center items-center w-1/4 mt-24 ml-72 p-4">
      <div className="  font-bold font-mono text-8xl">{foramtTime()}</div>
      <div className=" flex justify-evenly gap-16 mt-10 rounded-lg ml-10">
        <div>
          <button
            onClick={start}
            className=" px-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-green-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            Start
          </button>
        </div>
        <div>
          <button
            onClick={stop}
            className="px-8  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-red-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            Stop
          </button>
        </div>
        <div>
          <button
            onClick={reset}
            className="px-8 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-blue-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default StopWatch;
