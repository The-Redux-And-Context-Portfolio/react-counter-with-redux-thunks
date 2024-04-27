/* app imports */
import counterReducer from "./reducers/counter";
import soundReducer from "./reducers/sound";

/* central reducer - combines all reducers in the redux store */
function centralReducer() {
  return {
    counter: counterReducer,
    sound: soundReducer
  };
}

/* exports */
export default centralReducer;
