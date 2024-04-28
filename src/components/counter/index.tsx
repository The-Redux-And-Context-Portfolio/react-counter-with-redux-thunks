/* node modules */
import React from "react";
import { useAppSelector } from "../../redux-store/hooks";

/* app imports */
import useNumberName from "../hooks/use-number-name";
import getCounter from "../../redux-store/selectors/get-counter";

/* component */
function Counter(): JSX.Element {
  const counter = useAppSelector(getCounter);
  const { numberName } = useNumberName(counter);
  return (
    <>
      <div className="posContainer text-center">
        <span className="num">{ counter }</span>
        <span className="name">{ numberName }</span>
      </div>
    </>
  );
}

/* exports */
export default Counter;
