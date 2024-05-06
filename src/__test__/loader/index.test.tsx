/* node modules */
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";

/* app imports */
import LoaderComponent from "../../components/loader/index";
import renderWithProvider from "../render-with-provider";

/* t-suite */
describe("LoaderComponent Test Suite", () => {
  const mockRenderProps = {
    preloadedState: {
      sound: false,
      counter: 0,
      loader: false
    }
  };

  beforeAll(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  test("check if no children or null is returned from the initial load", () => {
    /* setup */
    const { container } = renderWithProvider(<LoaderComponent/>, mockRenderProps);

    /* assertions */
    expect(container.childElementCount).toBe(0);
  });
});
