/* app imports */
import { useAppDispatch, useAppSelector } from "../../redux-store/hooks/index";
import { counterReset } from "../../redux-store/thunks/counter";
import getSound from "../../redux-store/selectors/get-sound";
import playResetSound from "../utils/reset-sound";

/* hook */
function useOnReset() {
  const sound = useAppSelector(getSound);
  const reduxDispatch = useAppDispatch();

  async function handleOnReset() {
    await reduxDispatch(counterReset()).unwrap();
    sound && playResetSound();
  }

  return { handleOnReset };
}

/* exports */
export default useOnReset;
