import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface InitialStateType {
  isAuthenticated: boolean;
  accessToken: string;
}

interface User {
  id: Text;
  name: string;
  email: string;
  cartID: string;
  address: string;
  profilePhoto: string;
  pincode: number;
  refreshToken: string;
}

const initialState: InitialStateType = {
  isAuthenticated: false,
  accessToken: "",
};

const authSlice = createSlice({
  name: "authSlice",
  initialState: initialState,
  reducers: {
    authenticate(state, action: PayloadAction<boolean>) {
      state.isAuthenticated = action.payload;
    },
  },
});

export const authReducer = authSlice.reducer;
export const { authenticate } = authSlice.actions;
