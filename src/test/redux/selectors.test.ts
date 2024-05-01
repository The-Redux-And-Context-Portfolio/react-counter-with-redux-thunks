/* app imports */
import getCounter from "../../redux-store/selectors/get-counter";
import getSound from "../../redux-store/selectors/get-sound";

/* t-suite */
describe("Redux Selectors Test Suite", () => {
  const mockState = {
    counter: 10,
    sound: false
  };

  test("check if 'getCounter' returns the right slice from state", () => {
    const result = getCounter(mockState);
    expect(result).toBe(mockState.counter);
  });

  test("check if 'getSound' returns the right slice from state", () => {
    const result = getSound(mockState);
    expect(result).toBe(mockState.sound);
  });
});
