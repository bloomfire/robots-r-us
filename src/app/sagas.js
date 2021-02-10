import { all, fork } from "redux-saga/effects";
import saga from "../data/saga";

export default function*() {
  yield all([
    fork(saga),
  ]);
}
