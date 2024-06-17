"use client";

import { FC, use, useEffect, useState } from "react";
import Layout from "./_ui/layout";
import Timer from "./_ui/timer";
import QuestionCounter from "./_ui/question-counter";
import QuestionsList from "./_ui/questions-list";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import StartSettings from "./_ui/startSettings";
import {
  initialState,
  setCurrentQuestion,
  setDeadline,
  setIsStarted,
  setIsTestOver,
  setIsTimeOver,
  setQuestions,
} from "@/store/slices/test";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { QUESTIONS } from "@/shared/mocks/questions";
import { Spinner } from "@/shared/ui/spinner";

const TestPage: FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();
  const isStarted = useAppSelector(({ test }) => test.isStarted);
  const questions = useAppSelector(({ test }) => test.questions);

  useEffect(() => {
    if (!localStorage.getItem("test")) {
      localStorage.setItem("test", JSON.stringify({ ...initialState }));
      dispatch(setQuestions(QUESTIONS));
      localStorage.setItem(
        "test",
        JSON.stringify({
          ...JSON.parse(localStorage.getItem("test") as string),
          questions: QUESTIONS,
        } as typeof initialState),
      );
    } else {
      const {
        currentQuestion,
        deadline,
        isStarted,
        isTestOver,
        isTimeOver,
        questions,
      } = JSON.parse(
        localStorage.getItem("test") as string,
      ) as typeof initialState;

      dispatch(setIsStarted(isStarted));
      dispatch(setIsTestOver(isTestOver));
      dispatch(setIsTimeOver(isTimeOver));
      dispatch(setCurrentQuestion(currentQuestion));
      dispatch(setDeadline(deadline));
      dispatch(setQuestions(questions));
    }
  }, [dispatch]);

  useEffect(() => {
    if (questions.length === 0) {
      dispatch(setQuestions(QUESTIONS));
      localStorage.setItem(
        "test",
        JSON.stringify({
          ...JSON.parse(localStorage.getItem("test") as string),
          questions: QUESTIONS,
        } as typeof initialState),
      );
    }
  }, [dispatch, questions]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return isLoading ? (
    <Spinner size="large" />
  ) : isStarted ? (
    <Layout
      timer={<Timer />}
      questionCounter={<QuestionCounter />}
      questionList={<QuestionsList />}
    />
  ) : (
    <StartSettings />
  );
};

export default TestPage;
