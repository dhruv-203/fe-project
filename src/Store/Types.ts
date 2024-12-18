export interface User {
  id: string;
  name: string;
  email: string;
  profilePhoto: string;
  cart: Cart;
  addresses: Address[];
}

export interface Address {
  id: string;
  address: string;
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

export interface UpdateProfileResponse {
  statusCode: number;
  data: {
    user: User;
  };
  message: string;
}

export interface UpdateProfileRequest extends FormData {
  Name: string;
  Email: string;
  ProfilePhoto: File | null;
}

export interface UpdatePasswordRequest {
  currentPassword: string;
  newPassword: string;
}

export interface UpdatePasswordResponse {
  statusCode: number;
  success: boolean;
  message: string;
}

interface Product {
  id: string;
  title: string;
  shortDescription: string;
  discountedPrice: number;
  originalPrice: number;
  colors: string[];
  category: string;
  brand: string;
  displayImage: string;
  ratings: number;
  reviews: string[];
  longDescription: string;
  additionalImages: string[];
  overview: string;
  keyFeatures: KeyFeatureItem[]; 
  isBestseller: boolean;
}

interface KeyFeatureItem {
  key: string;
  value: string;
}
