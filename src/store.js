import { configureStore } from "@reduxjs/toolkit";
import category from "./Features/categorySlice";

export const store = configureStore({
  reducer: {
    category,
  },
});
