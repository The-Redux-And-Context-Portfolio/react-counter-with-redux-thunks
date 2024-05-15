/**
  * Note: createAsyncThunks is not required for this type of application, but the reason why this has been used is 
  * to be able to understand how the system works with thunks.
  * The 'delayedPromiseResolver()' is used to provide the effect of a delayed state updated like people would experience 
  * when making an api call.
  */

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
