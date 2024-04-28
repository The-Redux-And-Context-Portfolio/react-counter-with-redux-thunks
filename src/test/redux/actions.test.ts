/* app imports */
import { counterReset, counterIncrement, coutnerDecrement } from "../../redux-store/actions/counter";
import { soundOn, soundOff } from "../../redux-store/actions/sound";

/* t-suite */
describe("Redux Action Creators Test Suite", () => {
  test("check if 'soundOff' returns the correct action payload", () => {
    const result = soundOff();
    expect(result).toEqual({type: "sound/off"});
  });

  test("check if 'soundOn' returns the correct action payload", () => {
    const result = soundOn();
    expect(result).toEqual({type: "sound/on"});
  });

  test("check if 'counterDecrement' returns the correct action payload", () => {
    const result = coutnerDecrement();
    expect(result).toEqual({type: "counter/decrement"});
  });

  test("check if 'counterIncrement' returns the correct action payload", () => {
    const result = counterIncrement();
    expect(result).toEqual({type: "counter/increment"});
  });

  test("check if 'counterReset' returns the correct action payload", () => {
    const result = counterReset();
    expect(result).toEqual({type: "counter/reset"});
  });
});
