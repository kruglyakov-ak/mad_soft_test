import { QUESTIONS } from "@/shared/mocks/questions";
import React, { Dispatch, FC, SetStateAction } from "react";
import QuestionItem from "./question-item";
import { Button } from "@/shared/ui/button";

interface IQuestionsListProps {
  currentQuestion: number;
  setCurrentQuestion: Dispatch<SetStateAction<number>>;
}

const QuestionsList: FC<IQuestionsListProps> = ({
  currentQuestion,
  setCurrentQuestion,
}) => {
  return (
    <>
      {QUESTIONS.map(
        ({ answerType, id, question, answerOptions }, index) =>
          currentQuestion === index && (
            <QuestionItem
              key={id}
              answers={answerOptions}
              question={question}
              setCurrentQuestion={() => setCurrentQuestion((prev) => prev + 1)}
              answerType={answerType}
              id={id}
            />
          ),
      )}

      {QUESTIONS.length === currentQuestion && (
        <div className="w-full flex flex-col gap-2 items-center justify-center text-center pt-10">
          <p className="w-full ">Тест окончен</p>
          <p className="w-full ">Оставшееся время: {}</p>
          <Button className="w-1/4" onClick={() => setCurrentQuestion(0)}>
            Начать сначала
          </Button>
        </div>
      )}
    </>
  );
};

export default QuestionsList;
