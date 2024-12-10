export interface User {
  id: string;
  name: string;
  email: string;
  profilePhoto: string;
  cart: Cart;
}

export interface CartItem {
  itemID: string;
  img: string;
  prodID: string;
  prodName: string;
  prodPrice: number;
  prodQuant: number;
  prodColor: string;
}

export interface Cart {
  id: string;
  cartItems: CartItem[];
}

export interface LoginRequest {
  Email: string;
  Password: string;
}

export interface RefreshTokenResponse {
  accessToken: string;
  refreshToken: string;
}

export interface LogoutRequest {
  accessToken: string | null;
}

export interface LogoutResponse {
  statusCode: number;
  data: {};
  message: string;
}

export interface LoginResponse {
  statusCode: number;
  data: {
    user: User;
    accessToken: string;
    refreshToken: string;
  };
  message: string;
}

export interface RegisterRequest {
  Name: string;
  Email: string;
  Password: string;
  ProfilePhoto: File;
  RePassword: string;
}
