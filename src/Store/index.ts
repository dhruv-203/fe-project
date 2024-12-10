import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./Slices/authApi";
import { authReducer } from "./Slices/authSlice";
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
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export {
  filterByBrands,
  filterByCategory,
  filterByPrice,
  initializeCategoryList,
  initializeProducts,
  sortBy,
  store,
};
