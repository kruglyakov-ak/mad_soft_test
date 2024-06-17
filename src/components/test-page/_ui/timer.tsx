"use client";

import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { FC, useCallback, useEffect, useState } from "react";
import { setIsTimeOver } from "@/store/slices/test";

const Timer: FC = () => {
  const dispatch = useAppDispatch();
  const isTimer = useAppSelector(({ test }) => test.isTimer);
  const deadline = useAppSelector(({ test }) => test.deadline);
  const isTimeOver = useAppSelector(({ test }) => test.isTimeOver);

  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const getTime = useCallback(() => {
    if (!deadline) return;

    const time = new Date(deadline - Date.now());
    setMinutes(time.getMinutes());
    setSeconds(time.getSeconds());

    if (time.getMinutes() === 0 && time.getSeconds() === 0) {
      dispatch(setIsTimeOver(true));
    }
  }, [deadline, dispatch]);

  useEffect(() => {
    const interval = setInterval(() => getTime(), 1000);
    if (isTimeOver) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [getTime, isTimeOver]);

  const timer = `${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;

  return (
    isTimer ? <div className="w-12 h-6 text-sm flex pl-1 items-center border border-gray-400 rounded-sm">
      {timer}
    </div> : null
  );
};

export default Timer;
