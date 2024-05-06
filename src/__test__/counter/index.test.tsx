/* node modules */
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";

/* app imports */
import renderWithProvider from "../render-with-provider";
import Counter from "../../components/counter/index";

/* t-suite */
describe("CounterComponent Test Suite", () => {
  const mockRenderProps = {
    preloadedState: {
      sound: false,
      counter: 10,
      loader: false
    }
  };

  test("check if 'counterNameElem' is rendered correctly on load", () => {
    /* setup */
    renderWithProvider(<Counter/>, mockRenderProps);
    const content = "ten";

    /* element(s) + assertions */
    const element = screen.getByTestId("counterNameElem");
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("name");
    expect(element.textContent).toBe(content.toString());
  });

  test("check if 'counterElem' is rendered correctly on load", () => {
    /* setup */
    renderWithProvider(<Counter/>, mockRenderProps);
    const content = mockRenderProps.preloadedState.counter;

    /* element(s) + assertions */
    const element = screen.getByTestId("counterElem");
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("num");
    expect(element.textContent).toBe(content.toString());
  });
});
