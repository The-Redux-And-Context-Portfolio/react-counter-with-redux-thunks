/* node modules */
import { createAction } from "@reduxjs/toolkit";

/* action creators */
const counterIncrement = createAction("counter/increment");
const coutnerDecrement = createAction("counter/decrement");
const counterReset = createAction("counter/reset");

/* exports */
export { counterReset, counterIncrement, coutnerDecrement };
