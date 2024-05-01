/* app imports */
import { useAppDispatch, useAppSelector } from "../../redux-store/hooks/index";
import { reset } from "../../redux-store/reducers/counter";
import getSound from "../../redux-store/selectors/get-sound";
import playResetSound from "../utils/reset-sound";

/* hook */
function useOnReset() {
  const sound = useAppSelector(getSound);
  const reduxDispatch = useAppDispatch();

  function handleOnReset() {
    reduxDispatch(reset());
    sound && playResetSound();
  }

  return { handleOnReset };
}

/* exports */
export default useOnReset;
