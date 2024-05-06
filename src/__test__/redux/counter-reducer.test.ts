/* app imports */
import counterReducer from "../../redux-store/reducers/counter";

/* t-suite */
describe("Counter Redux Reducer Test Suite", () => {
  const increment = "counter/increment/fulfilled";
  const decrement = "counter/decrement/fulfilled";
  const reset = "counter/reset/fulfilled";

  test("returns '0 (zero)' if provided reset action payload", () => {
    const result = counterReducer(2, {type: reset});
    expect(result).toBe(0);
  });

  test("returns 'value - 1' if provided decrement action payload", () => {
    const result = counterReducer(2, {type: decrement});
    expect(result).toBe(1);
  });

  test("returns 'value + 1' if provided increment action payload", () => {
    const result = counterReducer(2, {type: increment});
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
