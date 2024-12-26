import {
  AddItemToCartRequest,
  ApiResponse,
  Cart,
  RemoveItemFromCartRequest,
  UpdateCartRequest,
} from "../Types";
import { Api } from "./Api";

export const cartApi = Api.injectEndpoints({
  endpoints: (builder) => ({
    //add item to cart
    addToCart: builder.mutation<ApiResponse<Cart>, AddItemToCartRequest>({
      query: (params: AddItemToCartRequest) => ({
        url: `/cart/${params.cartID}/add`,
        method: "POST",
        body: { ...params.cartItem },
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }),
    }),

    //remove item from cart
    removeFromCart: builder.mutation<
      ApiResponse<Cart>,
      RemoveItemFromCartRequest
    >({
      query: (params: RemoveItemFromCartRequest) => ({
        url: `/cart/${params.cartID}/remove`,
        method: "POST",
        body: { prodID: params.prodID, prodColor: params.prodColor },
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }),
    }),

    //update cart
    updateCart: builder.mutation<ApiResponse<Cart>, UpdateCartRequest>({
      query: (params: UpdateCartRequest) => ({
        url: `/cart/${params.cartID}/update`,
        method: "POST",
        body: {
          prodID: params.prodID,
          prodColor: params.prodColor,
          prodQuant: params.prodQuant,
        },
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }),
    }),

    // //checkout
    // checkout: builder.mutation<CheckoutResponse, CheckoutRequest>({
    // query: (params: CheckoutRequest) => ({
    //     url: "/cart/checkout",
    //     method: "POST",
    //     body: { ...params },
    //     headers: {
    //     "Content-Type": "application/json",
    //     },
    //     credentials: "include",
    // }),
    // }),
  }),
});

export const {
  useAddToCartMutation,
  useRemoveFromCartMutation,
  useUpdateCartMutation,
} = cartApi;
