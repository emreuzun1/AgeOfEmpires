import { put, call, takeLatest } from "redux-saga/effects";
import { getUnitsFromJson } from "../../lib/api";

function* getUnits() {
  try {
    const units = yield call(getUnitsFromJson);
    const res = yield units.json();
    yield put({ type: "UNITS_GET_SUCCESS", payload: res });
  } catch (err) {
    console.log(err);
  }
}

const unitsSaga = [
  takeLatest("UNITS_GET_REQUEST", getUnits),
];

export default unitsSaga;
