import { configureStore } from "@reduxjs/toolkit";
// import userSlice from "../reducer/UserSlice";
import shopSlice from "../reducer/ShopSlice";

export const store = configureStore({
  reducer: {
    // user: userSlice,
    shop: shopSlice,
  },
});
