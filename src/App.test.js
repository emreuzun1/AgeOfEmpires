/* eslint-disable react/react-in-jsx-scope */
import { render, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./rxutils/store";
import Home from "./pages/Home";
import { BrowserRouter } from "react-router-dom";
import { runSaga } from "redux-saga";
import { getUnits } from "./rxutils/sagas/units";

afterEach(cleanup);

describe("Tests for Age Of Empires", () => {
  test("check for renders image and navigation bar in home page", async () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </Provider>
    );
    expect(getByTestId("wallpaper")).toBeInTheDocument();
    expect(getByTestId("navbar")).toBeInTheDocument();
  });

  test("should load units", async () => {
    const dispatchedActions = [];

    const fakeStore = {
      getState: () => {
        {
          loading: false;
          units: [];
        }
      },
      dispatch: (action) => dispatchedActions.push(action),
    };
    await runSaga(fakeStore, getUnits).done;
    console.log(dispatchedActions);
  });
});
