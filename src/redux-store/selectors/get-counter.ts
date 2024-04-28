/* app imports */
import { RootState } from "../store";

/* module */
function getCounter(state: RootState): number {
  const { counter } = state;
  return counter;
}

/* exports */
export default getCounter;
