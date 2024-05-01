/* node modules */
import { createSlice } from "@reduxjs/toolkit";

/* reducer */
const initialState = true;
const soundSlice = createSlice({
  name: "sound",
  initialState,
  reducers: {
    on: () => {
      return true;
    },
    off: () => {
      return false;
    }
  }
});

/* exports */
export const { on, off } = soundSlice.actions;
export default soundSlice.reducer;
