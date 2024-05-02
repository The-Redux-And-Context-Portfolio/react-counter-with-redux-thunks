/* node modules */
import React from "react";

/* app imports */
import "./common/css/common.scss";
import "./style.scss";
import Counter from "./components/counter/index";
import Buttons from "./components/buttons";
import Controls from "./components/controls";
import Loader from "./components/loader";

function App(): JSX.Element {
  return (
    <>
      <Loader />
      <div className="mainContainer positionRelative">
        <Controls />
        <Counter />
        <Buttons />
      </div>
    </>
  );
}

export default App;
