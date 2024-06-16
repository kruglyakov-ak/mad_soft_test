import { QUESTIONS } from "@/shared/mocks/questions";
import { Question } from "@/shared/types/question";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface TestState {
  isTimer: boolean;
  isStarted: boolean;
  deadline: number | null;
  time: number | null;
  questions: Question[];
  currentQuestion: number;
}

const initialState: TestState = {
  isStarted: false,
  isTimer: false,
  deadline: null,
  time: null,
  questions: QUESTIONS,
  currentQuestion: 0,
};

export const test = createSlice({
  name: "test",
  initialState,
  reducers: {
    setIsTimer: (state: TestState, action: PayloadAction<boolean>) => {
      state.isTimer = action.payload;
    },
    setIsStarted: (state: TestState, action: PayloadAction<boolean>) => {
      state.isStarted = action.payload;
    },
    setDeadline: (state: TestState, action: PayloadAction<number | null>) => {
      state.deadline = action.payload;
    },
    setTime: (state: TestState, action: PayloadAction<number | null>) => {
      state.time = action.payload;
    },
    setQuestions: (state: TestState, action: PayloadAction<Question[]>) => {
      state.questions = action.payload;
    },
    setCurrentQuestion: (state: TestState, action: PayloadAction<number>) => {
      state.currentQuestion = action.payload;
    },
    resetState: () => initialState,
  },
});

export const {
  setIsTimer,
  setDeadline,
  setTime,
  setQuestions,
  setCurrentQuestion,
  resetState,
  setIsStarted,
} = test.actions;

export default test.reducer;
