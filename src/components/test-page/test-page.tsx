'use client'

import { FC, useState } from "react";
import Layout from "./_ui/layout";
import Timer from "./_ui/timer";
import QuestionCounter from "./_ui/question-counter";
import QuestionsList from "./_ui/questions-list";
import { Question } from "@/shared/types/question";

interface ITestPagePops {
  questions: Question[];
  isTimer: boolean;
}

const TestPage: FC<ITestPagePops> = ({
  isTimer,
  questions,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(questions.length);


  return (
    <Layout
      timer={isTimer && <Timer deadline={Date.now() + 30 * 60 * 1000} />}
      questionCounter={
        <QuestionCounter
          questions={questions}
          currentQuestion={currentQuestion}
        />
      }
      questionList={
        <QuestionsList
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
        />
      }
    />
  );
};

export default TestPage;
