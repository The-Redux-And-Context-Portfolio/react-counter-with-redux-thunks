/* node modules */
import { createAction } from "@reduxjs/toolkit";

/* action creators */
const soundOn = createAction("sound/on");
const soundOff = createAction("sound/off");

/* exports */
export { soundOn, soundOff };
