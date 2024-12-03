import { configureStore } from "@reduxjs/toolkit";
import { authenticate, authReducer } from "./Slices/authSlice";
import {
  filterByBrands,
  filterByCategory,
  filterByPrice,
  initializeCategoryList,
  initializeProducts,
  productReducer,
  sortBy,
} from "./Slices/productsSlice";
const store = configureStore({
  reducer: {
    products: productReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export {
  authenticate,
  filterByBrands,
  filterByCategory,
  filterByPrice,
  initializeCategoryList,
  initializeProducts,
  sortBy,
  store,
};
