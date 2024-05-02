/* app imports */
import guitarSoundFile from "../../assets/sounds/guitar-notification.wav";

/* hook */
function playGuitarSound() {
  const guitarSound = new Audio(guitarSoundFile);
  return () => {
    guitarSound.pause();
    guitarSound.currentTime = 0;
    guitarSound.play();
  }
}

/* exports */
export default playGuitarSound();
