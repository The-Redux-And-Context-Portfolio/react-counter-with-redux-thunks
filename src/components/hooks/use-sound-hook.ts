/* node modules */
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux-store/hooks/index";

/* app imports */
import { soundOffIcon, soundOnIcon } from "../utils/sound-icons";
import { off as soundOff, on as soundOn } from "../../redux-store/reducers/sound";
import soundIconWhite from "../../assets/icons/sound-icon-white.svg";
import muteIconWhite from "../../assets/icons/mute-icon-white.svg";
import getSound from "../../redux-store/selectors/get-sound";

/* hook */
function useSoundHook() {
  const sound = useAppSelector(getSound);
  const reduxDispatch = useAppDispatch();
  const [soundIcon, setSoundIcon] =
    useState<Record<string, any>>(sound ? soundOnIcon : soundOffIcon);

  function handleOnSound() {
    if (sound) {
      reduxDispatch(soundOff());
      setSoundIcon(soundOffIcon);
    }
    else {
      reduxDispatch(soundOn());
      setSoundIcon(soundOnIcon);
    }
  }

  return {
    handleOnSound,
    soundIcon
  }
}

/* exports */
export default useSoundHook;
