import {
  ApiResponse,
  UpdatePasswordRequest,
  UpdatePasswordResponse,
  UpdateProfileRequest,
  UpdateProfileResponse,
  User,
  WishlistRequest,
} from "../Types";
import { Api } from "./Api";

export const userApi = Api.injectEndpoints({
  endpoints: (builder) => ({
    updateProfile: builder.mutation<
      UpdateProfileResponse,
      UpdateProfileRequest
    >({
      query: (data: UpdateProfileRequest) => ({
        url: "/user/updateProfile",
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),
    updatePassword: builder.mutation<
      UpdatePasswordResponse,
      UpdatePasswordRequest
    >({
      query: (data: UpdatePasswordRequest) => ({
        url: "/user/updatePassword",
        method: "POST",
        body: data,
        credentials: "include",
      }),
    }),

    addToWishlist: builder.mutation<ApiResponse<User>, WishlistRequest>({
      query: (params: WishlistRequest) => ({
        url: `/user/${params.prodID}`,
        method: "POST",
        body: { isExists: params.isExists },
        credentials: "include",
      }),
    }),
    placeOrder: builder.mutation<ApiResponse<User>, string>({
      query: (params: string) => {
        console.log(params);
        return {
          url: `/orders/placeOrder`,
          method: "POST",
          body: { shippingAddress: params },
          credentials: "include",
        };
      },
    }),
  }),
});

export const {
  useUpdatePasswordMutation,
  useUpdateProfileMutation,
  useAddToWishlistMutation,
  usePlaceOrderMutation,
} = userApi;
