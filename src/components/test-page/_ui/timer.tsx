"use client";

import { FC, useEffect, useState } from "react";

interface ITimerProps {
  deadline: number;
}

const Timer: FC<ITimerProps> = ({ deadline }) => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const getTime = () => {
    const time = new Date(deadline - Date.now());

    setMinutes(time.getMinutes());
    setSeconds(time.getSeconds());
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const timer = `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;

  return (
    <div className="w-12 h-6 text-sm flex pl-1 items-center border border-gray-400 rounded-sm">
      {timer}
    </div>
  );
};

export default Timer;
