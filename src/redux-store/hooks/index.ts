/* node modules */
import { useSelector, useDispatch } from "react-redux";

/* app imports */
import { RootState, AppDispatch } from "../store";

/* create and export */
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
