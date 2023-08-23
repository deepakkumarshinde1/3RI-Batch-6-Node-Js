import { call, put } from "redux-saga/effects";
import { getCategoryListService } from "./Product.services";
import { setCategory } from "../reducers/Product.slice";
import { resetMessage, setMessage } from "../reducers/Message.slice";

export function* getCategoryListHandler() {
  yield put(resetMessage());
  try {
    let { data } = yield call(getCategoryListService);
    yield put(setCategory({ list: data.list }));
  } catch (error) {
    yield put(
      setMessage({
        type: "error",
        text: "Server Error Contact to Admin",
        title: "Error Occur !!!",
      })
    );
  }
}
