import { Question } from "@/shared/types/question";
import { cn } from "@/shared/ui/utils";
import React, { FC } from "react";

interface IQuestionCounterProps {
  currentQuestion: number;
  questions: Question[];
}

const QuestionCounter: FC<IQuestionCounterProps> = ({
  questions,
  currentQuestion,
}) => {
  return (
    <div className="w-full flex gap-1">
      {questions.map((_, index) => (
        <div
          key={index}
          className={cn(
            "w-full h-2",
            currentQuestion === index
              ? "bg-red-800"
              : currentQuestion < index 
                ? "bg-gray-200"
                : "bg-black",
          )}
        />
      ))}
    </div>
  );
};

export default QuestionCounter;
