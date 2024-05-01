/* app imports */
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import React, { PropsWithChildren } from "react";

/* app imports */
import createReduxStore, { RootState } from "../../src/redux-store/store";

/* interface */
interface ModuleProps {
  preloadedState: RootState;
}

/* module */
function renderWithProvider(ui: React.ReactElement, props: ModuleProps) {
  const { preloadedState } = props;
  const store = createReduxStore(preloadedState);

  function ProviderWrapper({ children }: PropsWithChildren): JSX.Element {
    return (
      <Provider store={store}>
        { children }
      </Provider>
    );
  }

  return {
    store,
    ...render(ui, {wrapper: ProviderWrapper})
  }
}

/* exports */
export default renderWithProvider;
