import { Button } from "@/shared/ui/button";
import { FC } from "react";

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
}) => {
  return (
    <div>
      <p>{question}</p>
      <Button onClick={() => setCurrentQuestion()}>
        Ответ
      </Button>
    </div>
  );
};

export default QuestionItem;
