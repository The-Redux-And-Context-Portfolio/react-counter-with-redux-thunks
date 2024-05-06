/* app imports */
import loaderReducer from "../../redux-store/reducers/loader";

/* t-suite */
describe("Loader Redux Reducer Test Suite", () => {
  const increment = "counter/increment";
  const decrement = "counter/decrement";
  const reset = "counter/reset";

  /* fulfilled state */
  test("check if returns 'false' to hide the loader element", () => {
    const baseOfActions = [increment, decrement, reset];
    baseOfActions.forEach((anAction) => {
      const action = {type: `${anAction}/fulfilled`};
      const result = loaderReducer(true, action);
      expect(result).toBe(false);
    });
  });

  /* pending state */
  test("check if returns 'true' to show the loader element", () => {
    const baseOfActions = [increment, decrement, reset];
    baseOfActions.forEach((anAction) => {
      const action = {type: `${anAction}/pending`};
      const result = loaderReducer(false, action);
      expect(result).toBe(true);
    });
  });
});
