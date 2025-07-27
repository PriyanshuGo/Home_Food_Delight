// dummySlice.ts
import { createSlice } from "@reduxjs/toolkit";

interface DummyState {
  count: number;
}

const initialState: DummyState = {
  count: 0,
};

const dummySlice = createSlice({
  name: "dummy",
  initialState,
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = dummySlice.actions;
export default dummySlice.reducer;