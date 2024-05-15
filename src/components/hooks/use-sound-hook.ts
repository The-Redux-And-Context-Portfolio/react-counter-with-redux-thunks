/* node modules */
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux-store/hooks/index";

/* app imports */
import { soundOffIcon, soundOnIcon } from "../utils/sound-icons";
import { off as soundOff, on as soundOn } from "../../redux-store/reducers/sound";
import soundIconWhite from "../../assets/icons/sound-icon-white.svg";
import muteIconWhite from "../../assets/icons/mute-icon-white.svg";
import getSound from "../../redux-store/selectors/get-sound";

/**
  * @returns - the appropriate sound icon based on whether sound is set as active or not, along with an event 
  * handler for user interactions.
  */
function useSoundHook() {
  /* subscribe to the redux store updates */
  const sound = useAppSelector(getSound);
  /* create a function that helps to send instructions to the store */
  const reduxDispatch = useAppDispatch();
  /* local state updates for the sound icon based on whether sound is set as 'true' or 'false' */
  const [soundIcon, setSoundIcon] =
    useState<Record<string, any>>(sound ? soundOnIcon : soundOffIcon);

  /* event handler */
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
