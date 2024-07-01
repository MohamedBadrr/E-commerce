import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const favSlice = createSlice({
  name: "fav",
  initialState,
  reducers: {
    favItem: (state, action) => {
      const product = action.payload;
      const exist = state.find((Product) => Product.id === product.id);
      if (!exist) {
        state.push(product);
      }
    },
    DelFavItem: (state, action) => {
      const product = action.payload;
      const exist = state.find((Product) => Product.id === product.id);
      if (exist) {
        state.pop();
      }
    },
  },
});

export default favSlice.reducer;
export const { DelFavItem, favItem } = favSlice.actions;
