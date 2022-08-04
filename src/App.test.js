/* eslint-disable react/react-in-jsx-scope */
import { render, screen, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./rxutils/store";
import App from "./App";

afterEach(cleanup);

test("renders image in home page", () => {
  const { queryByTestId } = render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
  expect(queryByTestId("wallpaper")).toBeInTheDocument();
});
