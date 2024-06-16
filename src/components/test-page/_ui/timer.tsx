"use client";

import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { setTime } from "@/store/slices/test";
import { FC, useCallback, useEffect, useState } from "react";

const Timer: FC = () => {
  const { deadline, time } = useAppSelector(({ test }) => test);
  const dispatch = useAppDispatch();

  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const getTime = useCallback(() => {
    if (!deadline) return;

    const time = new Date(deadline - Date.now());
    dispatch(setTime(Math.floor((deadline - Date.now()) / 1000)));
    setMinutes(time.getMinutes());
    setSeconds(time.getSeconds());
  }, [deadline, dispatch]);

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);

    if (time && time < 1) {
      setMinutes(0);
      setSeconds(0);
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [getTime, time]);

  const timer = `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;

  return (
    <div className="w-12 h-6 text-sm flex pl-1 items-center border border-gray-400 rounded-sm">
      {timer}
    </div>
  );
};

export default Timer;
