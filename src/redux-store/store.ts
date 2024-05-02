/* node modules */
import { configureStore } from "@reduxjs/toolkit";

/* app imports */
import centralReducer from "./cominbed-reducers";

const defaultState = {
  sound: true,
  counter: 0,
  loader: false
};

/* redux store */
function createReduxStore(preloadedState = defaultState) {
  return configureStore({
    reducer: centralReducer(),
    devTools: true,
    preloadedState
  });
}

/* exports */
export default createReduxStore;
export type AppStore = ReturnType<typeof createReduxStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
