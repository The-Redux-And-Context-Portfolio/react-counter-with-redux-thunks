/* node modules */
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

/* app imports */
import renderWithProvider from "./render-with-provider";
import App from "../App";

/* t-suite */
describe("Functional Test Suite", () => {
  const mockRenderProps = {
    preloadedState: {
      sound: false,
      counter: 0
    }
  };

  beforeAll(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  test("check if sound icon toggles correctly on click", async () => {
    /* setup */
    const user = userEvent.setup();
    renderWithProvider(<App />, mockRenderProps);

    /* element */
    const button = screen.getByTestId("soundBtn");
    const soundIcon = screen.getByTestId("soundIcon");

    /* #1. event + assertions */
    await user.click(button);
    expect(soundIcon).toHaveAttribute("title", "Sound On");
    expect(soundIcon).toHaveAttribute("src", "sound-icon-white.svg");

    /* #2. event + assertions */
    await user.click(button);
    expect(soundIcon).toHaveAttribute("title", "Sound Off");
    expect(soundIcon).toHaveAttribute("src", "mute-icon-white.svg");
  });

  test("check if state counter value resets on button click", async () => {
    /* setup */
    const user = userEvent.setup();
    renderWithProvider(<App />, mockRenderProps);

    /* element(s) */
    const incBtn = screen.getByTestId("incBtn");
    const resetBtn = screen.getByTestId("resetBtn");
    const counterElem = screen.getByTestId("counterElem");

    /* #1. event + assertions */
    await user.click(incBtn);
    await user.click(incBtn);
    expect(counterElem.textContent).toBe("2");

    /* #2. event + assertions */
    await user.click(resetBtn);
    expect(counterElem.textContent).toBe("0");
  });

  test("check if state decrement happends on button click", async () => {
    /* setup */
    const user = userEvent.setup();
    renderWithProvider(<App />, mockRenderProps);

    /* element(s) */
    const button = screen.getByTestId("decBtn");
    const counterElem = screen.getByTestId("counterElem");
    const counterNameElem = screen.getByTestId("counterNameElem");

    /* event */
    await user.click(button);

    /* assertions */
    expect(counterElem.textContent).toBe("-1");
    expect(counterNameElem.textContent).toBe("minus one");
  });

  test("check if state increment happends on button click", async () => {
    /* setup */
    const user = userEvent.setup();
    renderWithProvider(<App />, mockRenderProps);

    /* element(s) */
    const button = screen.getByTestId("incBtn");
    const counterElem = screen.getByTestId("counterElem");
    const counterNameElem = screen.getByTestId("counterNameElem");

    /* event */
    await user.click(button);

    /* assertions */
    expect(counterElem.textContent).toBe("1");
    expect(counterNameElem.textContent).toBe("one");
  });
});
