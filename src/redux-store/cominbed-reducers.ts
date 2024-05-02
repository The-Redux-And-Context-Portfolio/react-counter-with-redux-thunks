/* app imports */
import counterReducer from "./reducers/counter";
import soundReducer from "./reducers/sound";
import loaderSlice from "./reducers/loader";

/* central reducer - combines all reducers in the redux store */
function centralReducer() {
  return {
    counter: counterReducer,
    sound: soundReducer,
    loader: loaderSlice
  };
}

/* exports */
export default centralReducer;
