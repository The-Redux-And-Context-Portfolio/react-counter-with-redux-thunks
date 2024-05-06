/* node modules */
import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";

/* app imports */
import renderWithProvider from "../render-with-provider";
import Controls from "../../components/controls/index";

/* t-suite */
describe("ControlsComponent Test Suite", () => {
  const mockRenderProps = {
    preloadedState: {
      sound: false,
      counter: 0,
      loader: false
    }
  };

  test("check if 'reset' icon is rendered correctly on load", () => {
    /* setup */
    renderWithProvider(<Controls/>, mockRenderProps);

    /* element(s) + assertion(s) */
    const iconElem = screen.getByTitle("Counter - Reset");
    expect(iconElem).toBeInTheDocument();
    expect(iconElem).toHaveAttribute("src", "reset-icon-white.svg");
  });

  test("check if 'soundOff' icon is rendered correctly on load", () => {
    /* setup */
    renderWithProvider(<Controls/>, mockRenderProps);

    /* element(s) + assertion(s) */
    const iconElem = screen.getByTitle("Sound Off");
    expect(iconElem).toBeInTheDocument();
    expect(iconElem).toHaveAttribute("src", "mute-icon-white.svg");
  });

  test("check if buttons are rendered correctly on load", () => {
    /* setup */
    renderWithProvider(<Controls/>, mockRenderProps);

    /* element(s) + assertion in forEach loop */
    const buttons = screen.getAllByRole("button");
    buttons.forEach((element) => {
      expect(element).toBeInTheDocument();
      expect(element).toHaveAttribute("type", "button");
      expect(element).not.toBeDisabled();
      expect(element.classList.toString().indexOf("btn btn-default")).toBeGreaterThan(-1)
    });
  });
});
