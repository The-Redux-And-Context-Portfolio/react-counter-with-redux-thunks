/* app imports */
import { RootState } from "../store";

/* module */
function getCounter(state: RootState): boolean {
  const { sound } = state;
  return sound;
}

/* exports */
export default getCounter;
