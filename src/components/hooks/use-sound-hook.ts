/* node modules */
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux-store/hooks/index";

/* app imports */
import { soundOffIcon, soundOnIcon } from "../utils/sound-icons";
import { soundOff, soundOn } from "../../redux-store/actions/sound";
import soundIconWhite from "../../assets/icons/sound-icon-white.svg";
import muteIconWhite from "../../assets/icons/mute-icon-white.svg";
import getSound from "../../redux-store/selectors/get-sound";
import playClickSound from "../utils/click-sound";

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

    /* we can always play the click sound for this element */
    playClickSound();
  }

  return {
    handleOnSound,
    soundIcon
  }
}

/* exports */
export default useSoundHook;
