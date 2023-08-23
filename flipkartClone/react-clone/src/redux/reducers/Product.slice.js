import { createSlice } from "@reduxjs/toolkit";

let ProductSlice = createSlice({
  name: "ProductSlice",
  initialState: {
    categories: [],
  },
  reducers: {
    getCategory: (state, action) => {},
    setCategory: (state, action) => {
      let { list } = action.payload;
      state.categories = list;
    },
  },
});

export let { getCategory, setCategory } = ProductSlice.actions;
export default ProductSlice;
