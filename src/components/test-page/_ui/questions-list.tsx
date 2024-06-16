"use client";

import { FC } from "react";
import QuestionItem from "./question-item";
import { Button } from "@/shared/ui/button";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { resetState, setCurrentQuestion } from "@/store/slices/test";

const QuestionsList: FC = () => {
  const dispatch = useAppDispatch();
  const { questions, currentQuestion, time, deadline, isTimer } =
    useAppSelector(({ test }) => test);

  const resetTest = () => {
    dispatch(resetState());
  };

  return questions.length === currentQuestion ||
    (isTimer && deadline && deadline < Date.now()) ? (
    <div className="w-full flex flex-col gap-2 items-center justify-center text-center pt-10">
      <p className="w-full ">Тест завершен</p>
      {isTimer && (
        <p className="w-full ">
          {deadline && deadline < Date.now()
            ? "Время вышло"
            : `Оставшееся время: ${time}`}
        </p>
      )}
      <Button className="w-1/4" onClick={resetTest}>
        Начать сначала
      </Button>
    </div>
  ) : (
    <>
      {questions.map(
        ({ answerType, id, question, answerOptions }, index) =>
          currentQuestion === index && (
            <QuestionItem
              key={id}
              answers={answerOptions}
              question={question}
              setCurrentQuestion={() => dispatch(setCurrentQuestion(index + 1))}
              answerType={answerType}
              id={id}
            />
          ),
      )}
    </>

  );
};

export default QuestionsList;
