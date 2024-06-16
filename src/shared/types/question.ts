export type answerType = "single" | "multiple" | "text" | "string";

export type Question = {
  id: string;
  question: string;
  answerType: answerType;
  answerOptions?: string[];
};
