import {
  LoginRequest,
  LoginResponse,
  LogoutRequest,
  RefreshTokenResponse,
} from "../Types";
import { Api } from "./Api";

export const authApi = Api.injectEndpoints({
  endpoints: (builder) => ({
    //check user using cookies
    checkUser: builder.mutation<LoginResponse, void>({
      query: () => ({
        url: "/auth/checkUser",
        method: "POST",
        credentials: "include",
      }),
    }),

    //reset access token by requesting refreshToken
    refreshToken: builder.mutation<RefreshTokenResponse, void>({
      query: () => ({
        url: "/auth/refreshToken",
        method: "POST",
        credentials: "include",
      }),
    }),

    //login
    loginUser: builder.mutation<LoginResponse, LoginRequest>({
      query: (params: LoginRequest) => ({
        url: "/auth/login",
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
        url: "/auth/register",
        method: "POST",
        body: credential,
        credentials: "include",
      }),
    }),

    //logout
    logoutUser: builder.mutation<LogoutRequest, LogoutRequest>({
      query: (tmp: LogoutRequest) => {
        return {
          url: "/auth/logout",
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
