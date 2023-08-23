import { all } from "redux-saga/effects";
import { getCategoryListWatcher } from "./Product.watcher";

function* rootSaga() {
  let list = [getCategoryListWatcher()];
  yield all(list);
}

export default rootSaga;
