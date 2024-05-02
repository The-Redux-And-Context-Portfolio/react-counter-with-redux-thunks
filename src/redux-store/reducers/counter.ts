/* node modules */
import { createSlice } from "@reduxjs/toolkit";
import { counterIncrement, counterDecrement, counterReset } from "../thunks/counter";

/* reducer */
const initialState = 0;
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(counterIncrement.fulfilled, (state) => {
        return state + 1;
      })
      .addCase(counterDecrement.fulfilled, (state, action) => {
        return state - 1;
      })
      .addCase(counterReset.fulfilled, () => {
        return 0;
      });
  }
});

/* exports */
export default counterSlice.reducer;
