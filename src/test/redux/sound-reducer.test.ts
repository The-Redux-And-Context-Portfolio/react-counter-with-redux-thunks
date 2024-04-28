/* app imports */
import { soundOn, soundOff } from "../../redux-store/actions/sound";
import soundReducer from "../../redux-store/reducers/sound";

/* t-suite */
describe("Sound Redux Reducer Test Suite", () => {
  test("returns 'true' if provided soundOn action payload", () => {
    const result = soundReducer(false, soundOn());
    expect(result).toBe(true);
  });

  test("returns 'false' if provided soundOff action payload", () => {
    const result = soundReducer(true, soundOff());
    expect(result).toBe(false);
  });

  test("returns initialState if provided invalid action payload", () => {
    const result = soundReducer(true, {type: "hello"});
    expect(result).toBe(true);
  });

  test("returns initialState if provided 'undefined' for state param", () => {
    const result = soundReducer(undefined, {type: "hello"});
    expect(result).toBe(true);
  });
});
