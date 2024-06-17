import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import test from "./slices/test";

export const store = configureStore({
  reducer: {
    test,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
