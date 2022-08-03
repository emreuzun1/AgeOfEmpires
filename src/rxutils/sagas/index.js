import { all } from "redux-saga/effects";
import unitSaga from "./units";

export default function* rootSaga() {
  yield all([...unitSaga]);
}
