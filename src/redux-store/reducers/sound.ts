/* node modules */
import { createReducer } from "@reduxjs/toolkit";

/* app imports */
import { soundOn, soundOff } from "../actions/sound";

/* reducer */
const initialState = true;
const soundReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(soundOn, (state) => {
      return true;
    })
    .addCase(soundOff, (state) => {
      return false;
    })
});

/* exports */
export default soundReducer;
