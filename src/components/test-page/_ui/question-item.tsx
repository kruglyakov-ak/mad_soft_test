"use client";

import { AnswerType } from "@/shared/types/question";
import { FC, ReactNode } from "react";
import RadioAnswers from "./radio-answer";
import StringAnswer from "./string-answer";
import TextAnswer from "./text-answer";
import CheckboxAnswer from "./checkbox-answer";

interface IQuestionItemProps {
  id: string;
  question: string;
  answerType: string;
  answers: string[];
  setCurrentQuestion: () => void;
  order: number;
}

const QuestionItem: FC<IQuestionItemProps> = ({
  answerType,
  answers,
  question,
  setCurrentQuestion,
  id,
  order,
}) => {
  function getAnswersComponentByType(): ReactNode {
    switch (answerType) {
      case AnswerType.RADIO:
        return (
          <RadioAnswers
            qestion={question}
            id={id}
            setCurrentQuestion={setCurrentQuestion}
            answers={answers as [string, ...string[]]}
            order={order}
          />
        );
      case AnswerType.CHECKBOX:
        return (
          <CheckboxAnswer
            question={question}
            answers={answers}
            id={id}
            setCurrentQuestion={setCurrentQuestion}
            order={order}
          />
        );
      case AnswerType.STRING:
        return (
          <StringAnswer
            id={id}
            question={question}
            setCurrentQuestion={setCurrentQuestion}
            order={order}
          />
        );
      case AnswerType.TEXT:
        return (
          <TextAnswer
            id={id}
            question={question}
            setCurrentQuestion={setCurrentQuestion}
            order={order}
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
