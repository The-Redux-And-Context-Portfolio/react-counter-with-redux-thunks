/* node modules */
import { createReducer } from "@reduxjs/toolkit";

/* app imports */
import { counterReset, counterIncrement, coutnerDecrement } from "../actions/counter";

/* reducer */
const initialState = 0;
const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(counterReset, () => {
      return 0;
    })
    .addCase(counterIncrement, (state) => {
      return state + 1;
    })
    .addCase(coutnerDecrement, (state) => {
      return state - 1;
    });
});

/* exports */
export default counterReducer;
