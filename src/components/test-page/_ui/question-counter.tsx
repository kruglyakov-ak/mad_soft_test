import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { cn } from "@/shared/ui/utils";
import { FC } from "react";

const QuestionCounter: FC = () => {
  const questions = useAppSelector(({ test }) => test.questions);
  const currentQuestion = useAppSelector(({ test }) => test.currentQuestion);

  return (
    <div className="w-full flex gap-1">
      {questions.map(({order}) => (
        <div
          key={order}
          className={cn(
            "w-full h-2",
            currentQuestion === order
              ? "bg-red-800"
              : currentQuestion < order
                ? "bg-gray-200"
                : "bg-black"
          )}
        />
      ))}
    </div>
  );
};

export default QuestionCounter;
