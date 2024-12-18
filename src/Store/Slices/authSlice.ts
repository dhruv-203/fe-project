import { createSlice } from "@reduxjs/toolkit";
import { User } from "../Types";
import { authApi } from "./authApi";
import { userApi } from "./userApi";
interface InitialStateType {
  isAuthenticated: boolean;
  accessToken: string | null;
  user: User | null;
  refreshToken: string | null;
}

const initialState: InitialStateType = {
  isAuthenticated: false,
  accessToken: null,
  refreshToken: null,
  user: null,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.checkUser.matchFulfilled,
      (state, action) => {
        state.user = action.payload.data.user;
        state.accessToken = action.payload.data.accessToken;
        state.refreshToken = action.payload.data.refreshToken;
        state.isAuthenticated = true;
      }
    );
    builder.addMatcher(
      authApi.endpoints.registerUser.matchFulfilled,
      (state, action) => {
        state.accessToken = action.payload.data.accessToken;
        state.refreshToken = action.payload.data.refreshToken;
        state.user = action.payload.data.user;
        state.isAuthenticated = true;
      }
    );

    builder.addMatcher(
      authApi.endpoints.loginUser.matchFulfilled,
      (state, action) => {
        state.accessToken = action.payload.data.accessToken;
        state.refreshToken = action.payload.data.refreshToken;
        state.user = { ...action.payload.data.user };
        state.isAuthenticated = true;
      }
    );

    builder.addMatcher(
      authApi.endpoints.logoutUser.matchFulfilled,
      (state, action) => {
        state.accessToken = null;
        state.refreshToken = null;
        state.user = null;
        state.isAuthenticated = false;
      }
    );

    builder.addMatcher(
      userApi.endpoints.updateProfile.matchFulfilled,
      (state, action) => {
        state.user = action.payload.data.user;
      }
    );

    builder.addMatcher(
      userApi.endpoints.updateProfile.matchRejected,
      (state, action) => {
        console.log(action);
      }
    );
  },
});

export const authReducer = authSlice.reducer;
