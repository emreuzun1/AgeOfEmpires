import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import units from "./reducer/units";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: units,
  middleware: [sagaMiddleware],
});

const rootReducer = combineReducers({
  units: units,
});

export const setupStore = (preloadedState) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

sagaMiddleware.run(rootSaga);

export { store };
