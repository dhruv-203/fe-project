import { toQueryString } from "../../utils";
import {
  ApiResponse,
  FilterByBrandsRequestType,
  FilterByBrandsResponseType,
  FilterByCategoriesResponseType,
  FilterByCategoryRequestType,
  FilterByPriceRequestType,
  FilterByPriceResponseType,
  InitialFetchProductsResponseType,
  PageChangeRequestType,
  Product,
} from "../Types";
import { Api } from "./Api";

export const productsApi = Api.injectEndpoints({
  endpoints: (builder) => ({
    //byCategory
    byCategory: builder.query<
      ApiResponse<FilterByCategoriesResponseType>,
      FilterByCategoryRequestType
    >({
      query: (args: FilterByCategoryRequestType) => {
        const querieString = toQueryString(args);
        console.log(querieString);
        return `/products/byCategory?${querieString}`;
      },
    }),
    //initial
    initial: builder.query<
      ApiResponse<InitialFetchProductsResponseType>,
      number | void
    >({
      query: (args: number | void) => {
        const querieString = toQueryString({ pageSize: args || 10 });
        return `/products/initial?${querieString}`;
      },
    }),
    //byPrice
    byPrice: builder.query<
      ApiResponse<FilterByPriceResponseType>,
      FilterByPriceRequestType
    >({
      query: (args: FilterByPriceRequestType) => {
        const querieString = toQueryString(args);
        return `/products/byPrice?${querieString}`;
      },
    }),
    //byBrands
    byBrands: builder.query<
      ApiResponse<FilterByBrandsResponseType>,
      FilterByBrandsRequestType
    >({
      query: (args: FilterByBrandsRequestType) => {
        const querieString = toQueryString(args);
        console.log(args);
        return `/products/byBrands?${querieString}`;
      },
    }),
    //pageChange
    pageChange: builder.query<
      ApiResponse<FilterByPriceResponseType>,
      PageChangeRequestType
    >({
      query: (args: PageChangeRequestType) => {
        const querieString = toQueryString(args);
        return `/products?${querieString}`;
      },
    }),
    //suggestedProducts
    suggestedProducts: builder.query<
      ApiResponse<{ suggestedProducts: Product[] }>,
      { category: string; productId: string }
    >({
      query: (args: { category: string; productId: string }) => {
        const querieString = toQueryString(args);
        return `/products/suggestedProducts?${querieString}`;
      },
    }),
    //productDetails
    getProductDetails: builder.query<ApiResponse<{ product: Product }>, string>(
      {
        query: (productId: string) => `/products/${productId}`,
      }
    ),
  }),
});

export const {
  useLazyInitialQuery,
  useLazyByCategoryQuery,
  useLazyByBrandsQuery,
  useLazyByPriceQuery,
  useLazyPageChangeQuery,
  useLazySuggestedProductsQuery,
  useGetProductDetailsQuery,
} = productsApi;
