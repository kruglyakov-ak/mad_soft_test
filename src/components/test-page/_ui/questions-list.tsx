"use client";

import { FC, useEffect } from "react";
import QuestionItem from "./question-item";
import { Button } from "@/shared/ui/button";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import { resetState, setCurrentQuestion } from "@/store/slices/test";

const QuestionsList: FC = () => {
  const dispatch = useAppDispatch();
  const { questions, currentQuestion,  deadline, isTimer, isTimeOver } =
    useAppSelector(({ test }) => test);

  const resetTest = () => {
    dispatch(resetState());
  };

  useEffect(() => {
    console.log(deadline, Date.now(), deadline && deadline < Date.now());
  }, [deadline]);

  return questions.length === currentQuestion ||
    (isTimer && isTimeOver) ? (
    <div className="w-full flex flex-col gap-2 items-center justify-center text-center pt-10">
      <p className="w-full ">Тест завершен</p>
      {isTimer && (
        <p className="w-full ">
          {isTimeOver
            ? "Время вышло"
            : deadline && `Оставшееся время: ${new Date(deadline - Date.now()).getMinutes() < 10 ? "0" + new Date(deadline - Date.now()).getMinutes() : new Date(deadline - Date.now()).getMinutes()}:${new Date(deadline - Date.now()).getSeconds() < 10 ? "0" + new Date(deadline - Date.now()).getSeconds()  : new Date(deadline - Date.now()).getSeconds() }`}
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
