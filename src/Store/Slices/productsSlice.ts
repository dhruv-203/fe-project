import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SortOptions, toastify } from "../../utils";
import { ApiError, InitialFetchProductsResponseType, Product } from "../Types";
import { productsApi } from "./productsApi";

export interface ProductSliceState extends InitialFetchProductsResponseType {
  minPrice: number;
  maxPrice: number;
}

const initialState: ProductSliceState = {
  products: [],
  categoryList: [],
  selectedCategory: "",
  minPriceLimit: 0, // these values will be only modified when the filtered products are changing
  maxPriceLimit: 0, // only then as the limit are computed from the filtered products array
  availableBrands: [], //calculate in the component for now
  selectedBrands: {},
  sortOption: SortOptions.Name,
  pageNumber: 1,
  pageSize: 6,
  totalPages: 0,
  totalItems: 0,
  itemsCountPerCategory: {},
  minPrice: 0,
  maxPrice: 0,
  bestsellerProducts: [],
};

const helper = {
  filterProducts: (
    products: Product[],
    selectedCategory: string,
    Brands: { [key: string]: boolean }
  ) => {
    const selectedBrand = helper.getBrandNamesArray(Brands);
    return selectedBrand.length === 0
      ? products.filter((product) => product.category === selectedCategory)
      : products.filter(
          (product) =>
            product.category === selectedCategory &&
            selectedBrand.includes(product.brand)
        );
  },
  calculateRange: (products: Product[]) => {
    return products.reduce(
      (acc, curr) => {
        if (Math.ceil(curr.discountedPrice) > acc.maxLimit) {
          acc.maxLimit = Math.ceil(curr.discountedPrice);
        }
        if (Math.floor(curr.discountedPrice) < acc.minLimit) {
          acc.minLimit = Math.floor(curr.discountedPrice);
        }

        return acc;
      },
      { minLimit: Infinity, maxLimit: -Infinity }
    );
  },
  getBrandNamesArray: (brands: { [key: string]: boolean }): string[] => {
    return Object.entries(brands)
      .filter(([_, selected]) => selected)
      .map(([brand]) => brand);
  },
  sortBy(products: Product[], sortOption: SortOptions) {
    const filterProds = products;
    if (sortOption === SortOptions.Name) {
      return products.sort((a, b) => a.title.localeCompare(b.title));
    }
    if (sortOption === SortOptions.Rating) {
      return products.sort((a, b) => (a.ratings < b.ratings ? 1 : -1));
    }
    if (sortOption === SortOptions.HighestPrice) {
      return products.sort((a, b) => b.discountedPrice - a.discountedPrice);
    }
    if (sortOption === SortOptions.LowestPrice) {
      return products.sort((a, b) => a.discountedPrice - b.discountedPrice);
    }
    return filterProds;
  },
};

const productSlice = createSlice({
  name: "productsSlice",
  initialState: initialState,
  reducers: {
    changeMaxPrice(state, action: PayloadAction<number>) {
      state.maxPrice = action.payload;
    },
    changeMinPrice(state, action: PayloadAction<number>) {
      state.minPrice = action.payload;
    },
    changeSelectedBrands(
      state,
      action: PayloadAction<{ brands: { [key: string]: boolean } }>
    ) {
      state.selectedBrands = action.payload.brands;
    },

    sortBy(state, action: PayloadAction<SortOptions>) {
      state.sortOption = action.payload;
      state.products = helper.sortBy(state.products, action.payload);
    },
  },
  extraReducers(builder) {
    builder.addMatcher(
      productsApi.endpoints.initial.matchFulfilled,
      (state, action) => {
        console.log("Initially Fetched: ", action.payload.data);
        const {
          pageNumber,
          totalPages,
          selectedCategory,
          sortOption,
          products,
          totalItems,
          selectedBrands,
          categoryList,
          itemsCountPerCategory,
          minPriceLimit,
          maxPriceLimit,
          availableBrands,
          bestsellerProducts,
        } = action.payload.data;
        state.products = products;
        state.availableBrands = availableBrands;
        state.categoryList = categoryList;
        state.itemsCountPerCategory = itemsCountPerCategory;
        state.pageNumber = pageNumber;
        state.totalPages = totalPages;
        state.selectedCategory = selectedCategory;
        state.maxPriceLimit = maxPriceLimit;
        state.minPriceLimit = minPriceLimit;
        state.maxPrice = maxPriceLimit;
        state.minPrice = minPriceLimit;
        state.sortOption = sortOption;
        state.totalItems = totalItems;
        state.selectedBrands = selectedBrands;
        state.bestsellerProducts = bestsellerProducts;
        // add this much in state and other if required
      }
    );

    builder.addMatcher(
      productsApi.endpoints.byCategory.matchFulfilled,
      (state, action) => {
        console.log(action);
        const {
          pageNumber,
          totalPages,
          selectedCategory,
          sortOption,
          products,
          totalItems,
          selectedBrands,
          minPriceLimit,
          maxPriceLimit,
          availableBrands,
        } = action.payload.data;
        state.products = products;
        state.availableBrands = availableBrands;
        state.pageNumber = pageNumber;
        state.totalPages = totalPages;
        state.selectedCategory = selectedCategory;
        state.maxPriceLimit = maxPriceLimit;
        state.minPriceLimit = minPriceLimit;
        state.maxPrice = maxPriceLimit;
        state.minPrice = minPriceLimit;
        state.sortOption = sortOption;
        state.totalItems = totalItems;
        state.selectedBrands = selectedBrands;
      }
    );
    builder.addMatcher(
      productsApi.endpoints.byCategory.matchRejected,
      (state, action) => {
        console.log(action);
        toastify((action.payload?.data as ApiError).message, "error");
      }
    );
    builder.addMatcher(
      productsApi.endpoints.byBrands.matchFulfilled,
      (state, action) => {
        const {
          pageNumber,
          totalPages,
          selectedCategory,
          sortOption,
          products,
          totalItems,
          selectedBrands,
          minPriceLimit,
          maxPriceLimit,
        } = action.payload.data;
        state.products = products;
        state.pageNumber = pageNumber;
        state.totalPages = totalPages;
        state.selectedCategory = selectedCategory;
        state.maxPriceLimit = maxPriceLimit;
        state.minPriceLimit = minPriceLimit;
        state.maxPrice = maxPriceLimit;
        state.minPrice = minPriceLimit;
        state.sortOption = sortOption;
        state.totalItems = totalItems;
        state.selectedBrands = selectedBrands;
      }
    );
    builder.addMatcher(
      productsApi.endpoints.byPrice.matchFulfilled,
      (state, action) => {
        const {
          pageNumber,
          totalPages,
          selectedCategory,
          sortOption,
          products,
          totalItems,
          selectedBrands,
          minPrice,
          maxPrice,
        } = action.payload.data;
        state.products = products;
        state.pageNumber = pageNumber;
        state.totalPages = totalPages;
        state.selectedCategory = selectedCategory;
        state.maxPrice = maxPrice;
        state.minPrice = minPrice;
        state.sortOption = sortOption;
        state.totalItems = totalItems;
        state.selectedBrands = selectedBrands;
      }
    );
    builder.addMatcher(
      productsApi.endpoints.pageChange.matchFulfilled,
      (state, action) => {
        const {
          pageNumber,
          totalPages,
          selectedCategory,
          sortOption,
          products,
          totalItems,
          selectedBrands,
          minPrice,
          maxPrice,
        } = action.payload.data;
        state.products = products;
        state.pageNumber = pageNumber;
        state.totalPages = totalPages;
        state.selectedCategory = selectedCategory;
        state.maxPrice = maxPrice;
        state.minPrice = minPrice;
        state.sortOption = sortOption;
        state.totalItems = totalItems;
        state.selectedBrands = selectedBrands;
      }
    );
  },
});

export const productReducer = productSlice.reducer;
export const { sortBy, changeMaxPrice, changeMinPrice, changeSelectedBrands } =
  productSlice.actions;
