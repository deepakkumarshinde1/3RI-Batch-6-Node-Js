import { takeLatest } from "redux-saga/effects";
import { getCategory } from "../reducers/Product.slice";
import { getCategoryListHandler } from "./Product.handler";

export function* getCategoryListWatcher() {
  yield takeLatest(getCategory.type, getCategoryListHandler);
}
