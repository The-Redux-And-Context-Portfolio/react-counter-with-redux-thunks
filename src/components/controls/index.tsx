/* node modules */
import React from "react";

/* app imports */
import resetIconWhite from "../../assets/icons/reset-icon-white.svg";
import resetIconBlack from "../../assets/icons/reset-icon-black.svg";
import soundIconWhite from "../../assets/icons/sound-icon-white.svg";
import muteIconWhite from "../../assets/icons/mute-icon-white.svg";
import useOnReset from "../hooks/use-on-reset";

/* component */
function Controls(): JSX.Element {
  const { handleOnReset } = useOnReset();
  return (
    <>
      <div className="controls customRow">
        {/* sound button */}
        <button type="button" className="btn btn-default">
          <img src={soundIconWhite} className="img-fluid center-block"
          alt="" title=""/>
        </button>

        {/* reset button */}
        <button type="button" className="btn btn-default"
        onClick={handleOnReset}>
          <img src={resetIconWhite} className="img-fluid center-block"
          alt="" title=""/>
        </button>
      </div>
    </>
  );
}

/* exports */
export default Controls;
