/* eslint-disable react/react-in-jsx-scope */
import { render, screen, cleanup } from "@testing-library/react";
import App from "./App";

afterEach(cleanup);

test("renders learn react link", () => {
  const { queryByTestId } = render(<App />);
  expect(queryByTestId("wallpaper")).toBeInTheDocument();
});
