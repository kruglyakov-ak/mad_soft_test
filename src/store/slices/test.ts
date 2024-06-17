import { Question } from "@/shared/types/question";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TestState {
  isStarted: boolean;
  isTimeOver: boolean;
  isTestOver: boolean;
  deadline: number | null;
  questions: Question[];
  currentQuestion: number;
  answers?: Record<string, { answer: string[]; order: number } | undefined>;
}

export const initialState: TestState = {
  isStarted: false,
  isTimeOver: false,
  isTestOver: false,
  deadline: null,
  questions: [],
  currentQuestion: 1,
};

export const test = createSlice({
  name: "test",
  initialState,
  reducers: {
    setIsStarted: (state: TestState, action: PayloadAction<boolean>) => {
      state.isStarted = action.payload;
    },
    setDeadline: (state: TestState, action: PayloadAction<number | null>) => {
      state.deadline = action.payload;
    },
    setQuestions: (state: TestState, action: PayloadAction<Question[]>) => {
      state.questions = action.payload;
    },
    setCurrentQuestion: (state: TestState, action: PayloadAction<number>) => {
      state.currentQuestion = action.payload;
    },
    setIsTimeOver: (state: TestState, action: PayloadAction<boolean>) => {
      state.isTimeOver = action.payload;
    },
    setIsTestOver: (state: TestState, action: PayloadAction<boolean>) => {
      state.isTestOver = action.payload;
    },
    resetState: () => initialState,
  },
});

export const {
  setDeadline,
  setQuestions,
  setCurrentQuestion,
  resetState,
  setIsStarted,
  setIsTimeOver,
  setIsTestOver,
} = test.actions;

export default test.reducer;
