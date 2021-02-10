import { put, takeEvery } from "redux-saga/effects";
import * as Types from "./types";
import * as Actions from "./actions";

export function* getData() {
  const data = yield fetch(
    'http://localhost:3001/api/employees'
  ).then(response => response.json());
  yield put(Actions.getDataSuccess(data));
}

export default function*() {
  yield takeEvery(Types.GET_DATA, getData);
}
