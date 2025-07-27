// store.ts
import { configureStore } from "@reduxjs/toolkit";
import dummySlice from "./dummySlice";

export const store = configureStore({
  reducer: { dummy: dummySlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;