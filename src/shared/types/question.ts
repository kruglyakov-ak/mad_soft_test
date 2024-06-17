export const enum AnswerType {
  RADIO = "radio",
  CHECKBOX = "checkbox",
  TEXT = "text",
  STRING = "string",
}

export type QuestionId = string;

export type Question = {
  id: QuestionId;
  question: string;
  answerType: AnswerType;
  answerOptions: string[];
  order: number;
};
