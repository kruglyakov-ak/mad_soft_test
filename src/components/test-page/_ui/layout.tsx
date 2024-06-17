import { useAppSelector } from "@/shared/hooks/useAppSelector";
import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card";
import { FC, ReactNode } from "react";

interface ILayoutProps {
  timer?: ReactNode;
  questionCounter?: ReactNode;
  questionList?: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ timer, questionCounter, questionList }) => {
  const isTestOver = useAppSelector(({ test }) => test.isTestOver);
  const isTimeOver = useAppSelector(({ test }) => test.isTimeOver);

  return (
    <Card className="w-5/6">
      <CardHeader>
        <div className="flex gap-3 align-items-center">
          <CardTitle>Тестирование</CardTitle>
          {!isTestOver && !isTimeOver && timer}
        </div>

        {questionCounter}
        <CardContent>{questionList}</CardContent>
      </CardHeader>
    </Card>
  );
};

export default Layout;
