// store.ts
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "@/redux/cartSlice";
import categoryReducer from "@/redux/categorySlice";

export const store = configureStore({
  reducer: { cart: cartSlice, category: categoryReducer },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
