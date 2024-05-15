/* app imports */
import { useAppDispatch, useAppSelector } from "../../redux-store/hooks/index";
import { counterReset } from "../../redux-store/thunks/counter";
import getSound from "../../redux-store/selectors/get-sound";
import playResetSound from "../utils/reset-sound";

/**
  * @returns - an event handler that helps reset the value of the counter to zero
  */
function useOnReset() {
  /* subscribe to redux store updates */
  const sound = useAppSelector(getSound);
  /* create a dispatch function to send instructions to the store */
  const reduxDispatch = useAppDispatch();

  /* event handler */
  async function handleOnReset() {
    await reduxDispatch(counterReset());
    sound && playResetSound();
  }

  return { handleOnReset };
}

/* exports */
export default useOnReset;
