"use client";

import { FC } from "react";
import Layout from "./_ui/layout";
import Timer from "./_ui/timer";
import QuestionCounter from "./_ui/question-counter";
import QuestionsList from "./_ui/questions-list";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import StartSettings from "./_ui/startSettings";

const TestPage: FC = () => {
  const isStarted = useAppSelector(({ test }) => test.isStarted);

  return isStarted ? (
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
