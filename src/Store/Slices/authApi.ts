import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  LoginRequest,
  LoginResponse,
  LogoutRequest,
  RefreshTokenResponse,
} from "../Types";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/auth/",
  }),
  endpoints: (builder) => ({
    //check user using cookies
    checkUser: builder.mutation<LoginResponse, void>({
      query: () => ({
        url: "checkUser",
        method: "POST",
        credentials: "include",
      }),
    }),

    //reset access token by requesting refreshToken
    refreshToken: builder.mutation<RefreshTokenResponse, void>({
      query: () => ({
        url: "refreshToken",
        method: "POST",
        credentials: "include",
      }),
    }),

    //login
    loginUser: builder.mutation<LoginResponse, LoginRequest>({
      query: (params: LoginRequest) => ({
        url: "login",
        method: "POST",
        body: { ...params },
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      }),
    }),

    //register
    registerUser: builder.mutation<LoginResponse, FormData>({
      query: (credential: FormData) => ({
        url: "register",
        method: "POST",
        body: credential,
        credentials: "include",
      }),
    }),

    //logout
    logoutUser: builder.mutation<LogoutRequest, LogoutRequest>({
      query: (tmp: LogoutRequest) => {
        return {
          url: "logout",
          method: "POST",
          body: {},
          headers: {
            Authorization: `Bearer ${tmp.accessToken ?? " "}`,
          },
          credentials: "include",
        };
      },
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useLogoutUserMutation,
  useCheckUserMutation,
  useRefreshTokenMutation,
} = authApi;
