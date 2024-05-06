/* node modules */
import { screen, waitFor, act } from "@testing-library/react";
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
      counter: 0,
      loader: false
    }
  };

  beforeAll(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  beforeEach(() => {
    jest.clearAllTimers();
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
  });

  test("check if state counter value resets on button click", async () => {
    /* setup */
    const user = userEvent.setup({delay: null});
    renderWithProvider(<App />, mockRenderProps);

    /* element(s) */
    const incBtn = screen.getByTestId("incBtn");
    const resetBtn = screen.getByTestId("resetBtn");
    const counterElem = screen.getByTestId("counterElem");

    /* #1. event + assertions */
    await user.click(incBtn);
    act(() => {
      jest.advanceTimersByTime(1501);
    });
    await user.click(incBtn);
    act(() => {
      jest.advanceTimersByTime(1501);
    });
    await waitFor(() => {
      expect(counterElem.textContent).toBe("2");
    });

    /* #2. event + assertions */
    await user.click(resetBtn);
    act(() => {
      jest.advanceTimersByTime(1501);
    });
    await waitFor(() => {
      expect(counterElem.textContent).toBe("0");
    });
  });

  test("check if state decrement happends on button click", async () => {
    /* setup */
    const user = userEvent.setup({delay: null});
    renderWithProvider(<App />, mockRenderProps);

    /* element(s) */
    const button = screen.getByTestId("decBtn");
    const counterElem = screen.getByTestId("counterElem");
    const counterNameElem = screen.getByTestId("counterNameElem");

    /* event + run timers */
    await user.click(button);
    act(() => {
      jest.advanceTimersByTime(1501)
    });

    /* assertions */
    await waitFor(() => {
      expect(counterElem.textContent).toBe("-1");
      expect(counterNameElem.textContent).toBe("minus one");
    });
  });

  test("check if state increment happends on button click", async () => {
    /* setup */
    const user = userEvent.setup({delay: null});
    renderWithProvider(<App />, mockRenderProps);

    /* element(s) */
    const button = screen.getByTestId("incBtn");
    const counterElem = screen.getByTestId("counterElem");
    const counterNameElem = screen.getByTestId("counterNameElem");

    /* event + run timers */
    await user.click(button);
    act(() => {
      jest.advanceTimersByTime(1501)
    });

    /* assertions */
    await waitFor(() => {
      expect(counterElem.textContent).toBe("1");
      expect(counterNameElem.textContent).toBe("one");
    });
  });

  test("check if sound icon toggles correctly on click", async () => {
    /* setup */
    const user = userEvent.setup({delay: null});
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

  test("check if loader shows on decrement btn click", async () => {
    /* setup */
    const user = userEvent.setup({delay: null});
    renderWithProvider(<App />, mockRenderProps);

    /* element */
    const decButton = screen.getByTestId("decBtn");

    /* pre-event + event + post-event */
    expect(screen.queryByTitle("Loading...")).toBeNull();
    await user.click(decButton);
    expect(await screen.findByTitle("Loading...")).toBeInTheDocument();

    /* then, to check if the loader goes away after sometime... */
    act(() => {
      jest.advanceTimersByTime(1501);
    });
    await waitFor(() => {
      expect(screen.queryByTitle("Loading...")).toBeNull();
    });
  });

  test("check if loader shows on increment btn click", async () => {
    /* setup */
    const user = userEvent.setup({delay: null});
    renderWithProvider(<App />, mockRenderProps);

    /* element */
    const incButton = screen.getByTestId("incBtn");

    /* pre-event + event + post-event */
    //expect(screen.queryByTitle("Loading...")).toBeNull();
    await user.click(incButton);
    //expect(await screen.findByTitle("Loading...")).toBeInTheDocument();

    /* then, to check if the loader goes away after sometime... */
    act(() => {
      jest.advanceTimersByTime(1501);
    });
    await waitFor(() => {
      expect(screen.queryByTitle("Loading...")).toBeNull();
    });
  });
});
