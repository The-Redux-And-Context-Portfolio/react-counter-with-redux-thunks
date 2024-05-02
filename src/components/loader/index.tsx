/* node modules */
import React, { useEffect } from "react";

/* app imports */
import circularLoadGif from "../../assets/icons/circular-loading-icon.gif";
import { useAppSelector } from "../../redux-store/hooks/index";
import guitarSound from "../utils/guitar-sound";

/* component */
function Loader(): JSX.Element | null {
  const { sound, loader } = useAppSelector((state) => state);

  useEffect(() => {
    loader && sound && guitarSound();
  }, [sound, loader]);

  if (!loader) {
    return null;
  }
  return (
    <>
      <div className="loaderFrame">
        <div className="posContainer customRow">
          <img src={circularLoadGif}
          className="img-fluid"
          alt="Loading..." title="Loading..."/>
          Updating...
        </div>
      </div>
    </>
  );
}

/* exports */
export default Loader;
