/* node modules */
import { createAsyncThunk } from "@reduxjs/toolkit";

/* app imports */
import delayedPromiseResolver from "./delay";

/* counter increment */
export const counterIncrement = createAsyncThunk("counter/increment", async () => {
  await delayedPromiseResolver();
  return;
});

/* counter decrement */
export const counterDecrement = createAsyncThunk("counter/decrement", async () => {
  await delayedPromiseResolver();
  return;
});

/* counter reset */
export const counterReset = createAsyncThunk("counter/reset", async () => {
  await delayedPromiseResolver();
  return;
});
