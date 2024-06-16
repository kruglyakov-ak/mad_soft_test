import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { FC, ReactNode } from "react";

interface ILayoutProps {
  timer?: ReactNode;
  questionCounter?: ReactNode;
  questionList?: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ timer, questionCounter, questionList }) => {
  return (
    <Card className="w-5/6">
      <CardHeader>
        <div className="flex gap-3 align-items-center">
          <CardTitle>Тестирование</CardTitle>
          {timer}
        </div>

        {questionCounter}
        <CardContent>{questionList}</CardContent>
      </CardHeader>
    </Card>
  );
};

export default Layout;
