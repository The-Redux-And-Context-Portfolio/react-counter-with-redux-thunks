/* node modules */
import { createSlice } from "@reduxjs/toolkit";
import { counterIncrement, counterDecrement, counterReset } from "../thunks/counter";

/**
 * the reducer that takes care of the value of the counter. this will be controlled based on the
 * action that we are sending into the reducer
 **/
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
