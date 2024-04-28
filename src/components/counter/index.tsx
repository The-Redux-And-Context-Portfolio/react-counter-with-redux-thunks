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
        <span className="num" data-testid="counterElem">{ counter }</span>
        <span className="name" data-testid="counterNameElem">{ numberName }</span>
      </div>
    </>
  );
}

/* exports */
export default Counter;
