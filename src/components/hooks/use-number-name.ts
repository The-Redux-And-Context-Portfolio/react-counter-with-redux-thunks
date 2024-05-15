/* node modules */
import { useState, useEffect } from "react";
import numberToWords from "number-to-words";

/**
  * @returns - string that is the value of the number in 'words'
  */
function useNumberName(props: number) {
  const [numberName, setNumberName] = useState<string>("");

  useEffect(() => {
    const name = numberToWords.toWords(props);
    setNumberName(() => name);
  }, [props]);

  return { numberName };
}

/* exports */
export default useNumberName;
