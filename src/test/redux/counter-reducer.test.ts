/* app imports */
import { counterReset, counterIncrement, coutnerDecrement } from "../../redux-store/actions/counter";
import counterReducer from "../../redux-store/reducers/counter";

/* t-suite */
describe("Counter Redux Reducer Test Suite", () => {
  test("returns '0 (zero)' if provided reset action payload", () => {
    const result = counterReducer(2, counterReset());
    expect(result).toBe(0);
  });

  test("returns 'value - 1' if provided decrement action payload", () => {
    const result = counterReducer(2, coutnerDecrement());
    expect(result).toBe(1);
  });

  test("returns 'value + 1' if provided increment action payload", () => {
    const result = counterReducer(2, counterIncrement());
    expect(result).toBe(3);
  });

  test("returns initialState if provided invalid action payload", () => {
    const result = counterReducer(2, {type: "hello"});
    expect(result).toBe(2);
  });

  test("returns initialState if provided 'undefined' for state param", () => {
    const result = counterReducer(undefined, {type: "hello"});
    expect(result).toBe(0);
  });
});
