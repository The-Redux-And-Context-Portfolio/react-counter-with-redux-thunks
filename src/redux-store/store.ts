/* node modules */
import { configureStore } from "@reduxjs/toolkit";

/* app imports */
import centralReducer from "./cominbed-reducers";

/* redux store */
function createReduxStore() {
  return configureStore({
    reducer: centralReducer(),
    devTools: true
  });
}

/* exports */
export default createReduxStore;
export type AppStore = ReturnType<typeof createReduxStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
