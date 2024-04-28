/* app imports */
import { useAppDispatch } from "../../redux-store/hooks/index";
import { counterReset } from "../../redux-store/actions/counter";

/* hook */
function useOnReset() {
  const reduxDispatch = useAppDispatch();

  function handleOnReset() {
    reduxDispatch(counterReset());
  }

  return { handleOnReset };
}

/* exports */
export default useOnReset;
