"use client";

import { FC, useEffect, useState } from "react";
import QuestionItem from "./question-item";
import { Button } from "@/shared/ui/button";
import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { useAppDispatch } from "@/shared/hooks/useAppDispatch";
import {
  TestState,
  initialState,
  resetState,
  setCurrentQuestion,
  setIsTestOver,
} from "@/store/slices/test";

const QuestionsList: FC = () => {
  const dispatch = useAppDispatch();
  const [answers, setAnswers] = useState<TestState["answers"]>({});

  const { questions, currentQuestion, deadline, isTimeOver, isTestOver } =
    useAppSelector(({ test }) => test);

  const resetTest = () => {
    localStorage.removeItem("test");
    localStorage.setItem("test", JSON.stringify(initialState));
    dispatch(resetState());
  };

  useEffect(() => {
    if (questions.length < currentQuestion) {
      dispatch(setIsTestOver(true));
    }
  }, [questions, currentQuestion, dispatch]);

  useEffect(() => {
    if (localStorage.getItem("test") && isTestOver) {
      const test = JSON.parse(
        localStorage.getItem("test") as string,
      ) as TestState;

      setAnswers(test.answers || {});
    }
  }, [isTestOver]);

  const handleNextQuestion = () => {
    localStorage.setItem(
      "test",
      JSON.stringify({
        ...JSON.parse(localStorage.getItem("test") as string),
        currentQuestion: currentQuestion + 1,
      }),
    );
    dispatch(setCurrentQuestion(currentQuestion + 1));
  };

  return isTestOver || (deadline && isTimeOver) ? (
    <div className="w-full flex flex-col gap-2 items-center justify-center text-center pt-10">
      <p className="w-full ">Тест завершен</p>
      {deadline && (
        <p className="w-full ">
          {isTimeOver
            ? "Время вышло"
            : deadline &&
              `Оставшееся время: ${new Date(deadline - Date.now()).getMinutes() < 10 ? "0" + new Date(deadline - Date.now()).getMinutes() : new Date(deadline - Date.now()).getMinutes()}:${new Date(deadline - Date.now()).getSeconds() < 10 ? "0" + new Date(deadline - Date.now()).getSeconds() : new Date(deadline - Date.now()).getSeconds()}`}
        </p>
      )}

      <div className="w-full flex flex-col gap-y-4">
        {answers &&
          Object.entries(answers)
            .toSorted((a, b) => (a[1] && b[1] && a[1].order - b[1].order) || 0)
            .map(([id, value]) => {
              const question = questions.find((question) => question.id === id);

              return question ? (
                <div key={id} className="w-full items-center gap-2 flex">
                  <p className="font-bold border border-red-800 rounded-full p-2 w-[34px] h-[34px] leading-none ">
                    {question.order}
                  </p>
                  <div className="text-left">
                    <p className="font-bold">{question.question}</p>
                    <p>
                      {Array.isArray(value?.answer)
                        ? value?.answer.join(", ")
                        : value?.answer}
                    </p>
                  </div>
                </div>
              ) : null;
            })}
      </div>

      <Button className="w-1/4" onClick={resetTest}>
        Начать сначала
      </Button>
    </div>
  ) : (
    <>
      {questions.map(
        ({ answerType, id, question, answerOptions, order }, index) =>
          currentQuestion === order && (
            <QuestionItem
              key={id}
              answers={answerOptions}
              question={question}
              setCurrentQuestion={handleNextQuestion}
              answerType={answerType}
              id={id}
              order={order}
            />
          ),
      )}
    </>
  );
};

export default QuestionsList;
