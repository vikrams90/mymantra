import { configureStore } from "@reduxjs/toolkit";
import category from "./Features/categorySlice";
import product from "./Features/productSlice";
import user from "./Features/userSlice";
import wishlist from "./Features/wishlistSlice";

export const store = configureStore({
  reducer: {
    category,
    product,
    user,
    wishlist,
  },
});
