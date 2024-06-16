"use client";

import { AnswerType } from "@/shared/types/question";
import { FC, ReactNode } from "react";
import RadioAnswers from "./radio-answer";
import StringAnswer from "./string-answer";

interface IQuestionItemProps {
  id: string;
  question: string;
  answerType: string;
  answers: string[];
  setCurrentQuestion: () => void;
}

const QuestionItem: FC<IQuestionItemProps> = ({
  answerType,
  answers,
  question,
  setCurrentQuestion,
  id,
}) => {
  function getAnswersComponentByType(): ReactNode {
    console.log(answerType);
    switch (answerType) {
      case AnswerType.RADIO:
        return (
          <RadioAnswers
            qestion={question}
            id={id}
            setCurrentQuestion={setCurrentQuestion}
            answers={answers as [string, ...string[]]}
          />
        );
      case AnswerType.STRING:
        return (
          <StringAnswer
            id={id}
            qestion={question}
            setCurrentQuestion={setCurrentQuestion}
          />
        );
      default:
        return null;
    }
  }

  return (
    <div className="flex flex-col gap-4">{getAnswersComponentByType()}</div>
  );
};

export default QuestionItem;
