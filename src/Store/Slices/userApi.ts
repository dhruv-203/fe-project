import {
  UpdatePasswordRequest,
  UpdatePasswordResponse,
  UpdateProfileRequest,
  UpdateProfileResponse,
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
  }),
});

export const { useUpdatePasswordMutation, useUpdateProfileMutation } = userApi;
