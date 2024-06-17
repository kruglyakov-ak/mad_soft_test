import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { cn } from "@/shared/ui/utils";
import { FC } from "react";

const QuestionCounter: FC = () => {
  const questions = useAppSelector(({ test }) => test.questions);
  const currentQuestion = useAppSelector(({ test }) => test.currentQuestion);

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
                : "bg-black"
          )}
        />
      ))}
    </div>
  );
};

export default QuestionCounter;
