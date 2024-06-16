import { FC } from "react";
import QuestionCounter from "./_ui/question-counter";
import Layout from "./_ui/layout";
import Timer from "./_ui/timer";
import QuestionsList from "./_ui/questions-list";
import { Question } from "./model/types";

interface ITestPops {
  currentquestion: number;
  questions: Question[];
  isTimer: boolean;
}

const Test: FC<ITestPops> = ({ isTimer, currentquestion, questions }) => {
  return (
    <Layout
      timer={isTimer && <Timer deadline={Date.now() + (30 * 60 * 1000)} />}
      questionCounter={
        <QuestionCounter questions={questions} currentQuestion={currentquestion} />
      }
      questionList={<QuestionsList />}
    />
  );
};

export default Test;
