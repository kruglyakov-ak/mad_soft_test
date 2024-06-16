import { FC } from "react";
import Layout from "./_ui/layout";
import Timer from "./_ui/timer";
import QuestionCounter from "./_ui/question-counter";
import QuestionsList from "./_ui/questions-list";
import { Question } from "@/shared/types/question";

interface ITestPagePops {
  currentquestion: number;
  questions: Question[];
  isTimer: boolean;
}

const TestPage: FC<ITestPagePops> = ({
  isTimer,
  currentquestion,
  questions,
}) => {
  return (
    <Layout
      timer={isTimer && <Timer deadline={Date.now() + 30 * 60 * 1000} />}
      questionCounter={
        <QuestionCounter
          questions={questions}
          currentQuestion={currentquestion}
        />
      }
      questionList={<QuestionsList />}
    />
  );
};

export default TestPage;
