import { combineReducers } from "@reduxjs/toolkit";
import ProductSlice from "./Product.slice";
import MessageSlice from "./Message.slice";

let reducer = combineReducers({
  product: ProductSlice.reducer,
  message: MessageSlice.reducer,
});

export default reducer;
