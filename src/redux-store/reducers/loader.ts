/* node modules */
import { createSlice } from "@reduxjs/toolkit";
import { counterIncrement, counterDecrement, counterReset } from "../thunks/counter";

/**
 * the reducer that takes care of the value of the loader slice. this will be controlled based on the
 * action that we are sending into the reducer
 **/
const initialState = false;
const loaderSlice = createSlice({
  name: "loader",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(counterIncrement.pending, () => {
        return true;
      })
      .addCase(counterIncrement.fulfilled, () => {
        return false;
      })
      .addCase(counterDecrement.pending, () => {
        return true;
      })
      .addCase(counterDecrement.fulfilled, () => {
        return false;
      })
      .addCase(counterReset.pending, () => {
        return true;
      })
      .addCase(counterReset.fulfilled, () => {
        return false;
      });
  }
});

/* exports */
export default loaderSlice.reducer;
