import { TestState } from "@/store/slices/test";

export const saveAnswerToLocalStorage = ({
  questionId,
  answer,
  order,
}: {
  questionId: string;
  answer: string | string[];
  order: number;
}): void => {
  if (localStorage.getItem("test")) {
    const test = JSON.parse(
      localStorage.getItem("test") as string,
    ) as TestState;

    localStorage.setItem(
      "test",
      JSON.stringify({
        ...test,
        currentQuestion: order,
        answers: { ...test.answers, [questionId]: { order, answer } },
      }),
    );
  }
};
