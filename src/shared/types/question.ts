export const enum AnswerType {
  SINGLE = "single",
  MULTIPLE = "multiple",
  TEXT = "text",
  STRING = "string",
}

export type Question = {
  id: string;
  question: string;
  answerType: AnswerType;
  answerOptions: string[];
};
