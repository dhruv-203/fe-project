import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SortOptions } from "../../utils";
export interface Product {
    id: string,
    title: string,
    shortDescription: string,
    discountedPrice: number,
    originalPrice: number,
    colors: string[],
    category: string,
    brand: string,
    displayImage: string,
    ratings: number,
    reviews: string[],
    longDescription: string,
    additionalImages: string[]
}



export interface ProductSliceState {
    products: Product[],
    filteredProducts: Product[],
    selectedCategory: string, // this is deciding factor for brands, and this will set value for filteredProducts 
    categoryList: string[], //the backend is supposed to provide the list of category
    minPriceLimit: number, // the value which is adjust using the price slider
    maxPriceLimit: number,// these both values are variable the maxima and minima is supposed to be calculate based on the filtered state, so do not consider these both as maxima and minima of slider
    availableBrands: string[], // the backend is supposed to provide the filtered list of brands based on the category selected 
    selectedBrands: { [key: string]: boolean },
    sortOption: SortOptions
}
/*

temporary commented until the async is not applied

const initialState: ProductSliceState = {
    products: [],
    filteredProducts: [],
    categoryList: [], // create a component state in the place where this is used and then in the useEffect dispatch related actions as per requirement 
    // selectedCategory: "",
    // minPriceValue: 0,  the reason for commenting this is i am thinking of applying a component state and then dispatching an action whenever this changes 
    // maxPriceValue: 0,
    brands: [] // these are the avaiable brands in marketplace of the project not the one selected by user 
}
*/

const initialState: ProductSliceState = {
    products: [],
    filteredProducts: [],
    categoryList: [],
    selectedCategory: "",
    minPriceLimit: 0, // these values will be only modified when the filtered products are changing 
    maxPriceLimit: 0, // only then as the limit are computed from the filtered products array 
    availableBrands: [], //calculate in the component for now 
    selectedBrands: {},
    sortOption: SortOptions.Name
}

const helper = {
    filterProducts: (products: Product[], selectedCategory: string, Brands: { [key: string]: boolean }) => {
        const selectedBrand = helper.getBrandNamesArray(Brands)
        return (selectedBrand.length === 0 ?
            products.filter((product) => product.category === selectedCategory) :
            products.filter((product) => (product.category === selectedCategory && selectedBrand.includes(product.brand))))
    },
    calculateRange: (products: Product[]) => {
        return products.reduce((acc, curr) => {
            if (Math.ceil(curr.discountedPrice) > acc.maxLimit) {
                acc.maxLimit = Math.ceil(curr.discountedPrice)
            }
            if (Math.floor(curr.discountedPrice) < acc.minLimit) {
                acc.minLimit = Math.floor(curr.discountedPrice)
            }

            return acc
        }, { minLimit: Infinity, maxLimit: -Infinity })
    },
    getBrandNamesArray: (brands: { [key: string]: boolean }): string[] => {
        return Object.entries(brands).filter(([_, selected]) => selected).map(([brand]) => brand)
    },
    sortByName: (products: Product[]) => {
        return products.sort((a, b) => a.title.localeCompare(b.title))
    },
    sortByRating: (products: Product[]) => {
        return products.sort((a, b) => a.ratings < b.ratings ? 1 : -1)
    }
}

const productSlice = createSlice({
    name: "productsSlice",
    initialState: initialState,
    reducers: {
        initializeProducts(state, action: PayloadAction<Product[]>) {
            state.products = action.payload
            state.filteredProducts = (action.payload)
        },
        initializeCategoryList(state, action: PayloadAction<string[]>) {
            state.categoryList = action.payload
        },
        filterByCategory(state, action: PayloadAction<string>) {
            state.selectedCategory = action.payload;
            state.filteredProducts = state.products.filter((product) => product.category === action.payload)
            const { minLimit, maxLimit } = helper.calculateRange(state.filteredProducts)
            state.maxPriceLimit = maxLimit;
            state.minPriceLimit = minLimit;
            state.selectedBrands = {} // reseting the brands filters on changing the category

        },
        filterByPrice(state, action: PayloadAction<{ max: number, min: number }>) {
            state.filteredProducts = helper.filterProducts(state.products, state.selectedCategory, state.selectedBrands)
            state.filteredProducts = state.filteredProducts.filter((product) => {
                return (product.discountedPrice <= action.payload.max && product.discountedPrice >= action.payload.min)
            })
        },
        filterByBrands(state, action: PayloadAction<{ brands: { [key: string]: boolean } }>) {
            state.selectedBrands = action.payload.brands
            const selectedBrandNames = helper.getBrandNamesArray(action.payload.brands)
            state.filteredProducts = selectedBrandNames.length === 0 ? state.products.filter((product) => product.category === state.selectedCategory) : state.products.filter((product) => product.category === state.selectedCategory && selectedBrandNames.includes(product.brand))
            const { minLimit, maxLimit } = state.filteredProducts.reduce((acc, curr) => {
                if (Math.ceil(curr.discountedPrice) > acc.maxLimit) {
                    acc.maxLimit = Math.ceil(curr.discountedPrice)
                }
                if (Math.floor(curr.discountedPrice) < acc.minLimit) {
                    acc.minLimit = Math.floor(curr.discountedPrice)
                }

                return acc
            }, { minLimit: Math.floor(state.filteredProducts[0]?.discountedPrice ?? 0), maxLimit: Math.ceil(state.filteredProducts[0]?.discountedPrice ?? 0) } as { minLimit: number, maxLimit: number })
            state.maxPriceLimit = maxLimit;
            state.minPriceLimit = minLimit
        },
        // PENDING: sort-by functionality
        sortBy(state, action: PayloadAction<SortOptions>) {
            state.sortOption = action.payload
            if (action.payload === SortOptions.Name) {
                state.filteredProducts = helper.sortByName(state.filteredProducts)
            }
            if (action.payload === SortOptions.Rating) {
                state.filteredProducts = helper.sortByRating(state.filteredProducts)
            }
        }
    }
}
)

export const productReducer = productSlice.reducer
export const { filterByBrands, filterByPrice, filterByCategory, initializeCategoryList, initializeProducts, sortBy } = productSlice.actions