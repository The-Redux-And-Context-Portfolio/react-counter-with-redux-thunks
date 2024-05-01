/* node modules */
import { createSlice } from "@reduxjs/toolkit";

/* reducer */
const initialState = 0;
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      return state + 1;
    },
    decrement: (state) => {
      return state - 1;
    },
    reset: () => {
      return 0;
    }
  }
});

/* exports */
export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
