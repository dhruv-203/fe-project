import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { giveData } from "../../Pages/ProductsPage/data2";

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
    selectedBrandNames: string[]
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
    products: giveData(),
    filteredProducts: giveData(),
    categoryList: giveData().reduce((acc: string[], curr: Product) => {
        if (!acc.includes(curr.category)) {
            acc.push(curr.category)
        }
        return acc
    }, []),
    selectedCategory: "",
    minPriceLimit: 0, // these values will be only modified when the filtered products are changing 
    maxPriceLimit: 0, // only then as the limit are computed from the filtered products array 
    availableBrands: [], //calculate in the component for now 
    selectedBrands: {},
    selectedBrandNames: []
}
const productSlice = createSlice({
    name: "productsSlice",
    initialState: initialState,
    reducers: {
        filterByCategory(state, action: PayloadAction<string>) {
            state.selectedCategory = action.payload;
            state.filteredProducts = state.products.filter((product) => product.category === action.payload)
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
        filterByPrice(state, action: PayloadAction<{ max: number, min: number }>) {
            state.filteredProducts = state.selectedBrandNames.length === 0 ?
                state.products.filter((product) => product.category === state.selectedCategory) :
                state.products.filter((product) => product.category === state.selectedCategory && state.selectedBrandNames.includes(product.brand))
            state.filteredProducts = state.filteredProducts.filter((product) => {
                return (product.discountedPrice <= action.payload.max && product.discountedPrice >= action.payload.min)
            })
        },
        filterByBrands(state, action: PayloadAction<{ brands: { [key: string]: boolean } }>) {
            state.selectedBrands = action.payload.brands
            state.selectedBrandNames = Object.entries(action.payload.brands).reduce((acc, curr) => {
                if (curr[1]) {
                    acc.push(curr[0])
                }
                return acc
            }, [] as string[])
            state.filteredProducts = state.selectedBrandNames.length === 0 ? state.products.filter((product) => product.category === state.selectedCategory) : state.products.filter((product) => product.category === state.selectedCategory && state.selectedBrandNames.includes(product.brand))
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
    }
}
)

export const productReducer = productSlice.reducer
export const { filterByBrands, filterByPrice, filterByCategory } = productSlice.actions