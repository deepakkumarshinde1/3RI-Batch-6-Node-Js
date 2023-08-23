import { createSlice } from "@reduxjs/toolkit";

let MessageSlice = createSlice({
  name: "MessageSlice",
  initialState: {
    showMessage: false,
    message: {
      type: "success",
      text: "",
      title: "",
    },
  },
  reducers: {
    resetMessage: (state, action) => {
      state.showMessage = false;
    },
    setMessage: (state, action) => {
      state.showMessage = true;
      state.message = action.payload;
    },
  },
});

export let { resetMessage, setMessage } = MessageSlice.actions;
export default MessageSlice;
