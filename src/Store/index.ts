import { configureStore } from "@reduxjs/toolkit";
import { productReducer, filterByBrands, filterByCategory, filterByPrice } from "./Slices/productsSlice";
const store = configureStore(
    {
        reducer: {
            products: productReducer
        }
    }
)

export type RootState = ReturnType<typeof store.getState>;
export { store, filterByBrands, filterByCategory, filterByPrice }