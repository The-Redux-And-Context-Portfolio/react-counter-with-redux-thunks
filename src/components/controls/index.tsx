/* node modules */
import React from "react";

/* app imports */
import resetIconWhite from "../../assets/icons/reset-icon-white.svg";
import resetIconBlack from "../../assets/icons/reset-icon-black.svg";
import soundIconWhite from "../../assets/icons/sound-icon-white.svg";
import soundIconBlack from "../../assets/icons/sound-icon-black.svg";
import muteIconBlack from "../../assets/icons/mute-icon-black.svg";
import muteIconWhite from "../../assets/icons/mute-icon-white.svg";

/* component */
function Controls(): JSX.Element {
  return (
    <>
      <div className="controls customRow">
        <button type="button" className="btn btn-default">
          <img src={soundIconWhite} className="img-fluid center-block"
          alt="" title=""/>
        </button>
        <button type="button" className="btn btn-default">
          <img src={resetIconWhite} className="img-fluid center-block"
          alt="" title=""/>
        </button>
      </div>
    </>
  );
}

/* exports */
export default Controls;
