/* app imports */
import { RootState } from "../store";

/* module */
function getSound(state: RootState): boolean {
  const { sound } = state;
  return sound;
}

/* exports */
export default getSound;
