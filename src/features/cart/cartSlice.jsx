import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const product = action.payload;
      const exist = state.find((Product) => Product.id === product.id);
      if (exist) {
        return state.map((Product) =>
          Product.id === product.id
            ? { ...Product, qty: Product.qty + 1 }
            : Product
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }
    },

    increseItem: (state, action, newQty) => {
      const product = action.payload;
      const newQTY = newQty;
      console.log(product);
      const exist = state.find((Product) => Product.id === product.id);
      if (exist) {
        return state.map((Product) =>
          Product.id === product.id
            ? { ...Product, qty: Product.qty + 1 }
            : Product
        );
      }
    },
    decreaseItem: (state, action) => {
      const product = action.payload;
      const exist = state.find((Product) => Product.id === product.id);
      if (exist) {
        return state
          .map((Product) =>
            Product.id === product.id
              ? { ...Product, qty: Product.qty - 1 }
              : Product
          )
          .filter((Product) => Product.qty > 0);
      }
      return state;
    },

    deleteItem: (state, action) => {
      const product = action.payload;
      const deleteExist = state.find((Product) => Product.id === product.id);
      if (deleteExist) {
        state.pop();
      }
    },
  },
});

export default cartSlice.reducer;
export const { addItem, deleteItem, decreaseItem, increseItem } =
  cartSlice.actions;
