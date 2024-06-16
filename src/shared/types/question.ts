export const enum AnswerType {
  RADIO = "radio",
  CHECKBOX = "checkbox",
  TEXT = "text",
  STRING = "string",
}

export type Question = {
  id: string;
  question: string;
  answerType: AnswerType;
  answerOptions: string[];
};
