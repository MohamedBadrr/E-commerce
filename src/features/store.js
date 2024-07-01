import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";
import favReducer from "../features/fav/favSlice";
import userReducer from "../features/user/user";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    fav: favReducer,
    user: userReducer,
  },
});

export default store;
