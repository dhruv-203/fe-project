import { SortOptions } from "../utils";

export interface Order {
  id: string;
  orderDate: string;
  orderTotal: number;
  orderItems: CartItem[];
  shippingAddress: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  profilePhoto: string;
  cart: Cart;
  addresses: Address[];
  wishlist: string[];
  orders: Order[];
}

export interface Address {
  id: string;
  address: string;
}

export interface CartItem {
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

export interface Product {
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
  overview: string[];
  keyFeatures: Array<{ [key: string]: string }>;
  isBestseller: boolean;
  descriptionImage: string;
}

export interface Category {
  id: string;
  name: string;
  img: string;
}

export interface ApiResponse<T> {
  statusCode: number;
  data: T;
  message: string;
}

export interface FetchProductsResponseType {
  pageNumber: number;
  pageSize: number;
  totalPages: number;
  selectedCategory: string;
  sortOption: SortOptions;
  products: Product[];
  totalItems: number;
  selectedBrands: { [key: string]: boolean };
}

export interface InitialFetchProductsResponseType
  extends FetchProductsResponseType {
  categoryList: Category[];
  itemsCountPerCategory: { [key: string]: number };
  minPriceLimit: number;
  maxPriceLimit: number;
  availableBrands: string[];
  bestsellerProducts: Product[];
}

export interface FilterByCategoriesResponseType
  extends FetchProductsResponseType {
  minPriceLimit: number;
  maxPriceLimit: number;
  availableBrands: string[];
}

export interface FilterByBrandsResponseType extends FetchProductsResponseType {
  minPriceLimit: number;
  maxPriceLimit: number;
}

export interface FilterByPriceResponseType extends FetchProductsResponseType {
  minPrice: number;
  maxPrice: number;
}

export interface FilterByCategoryRequestType {
  selectedCategory: string;
  sortOption: SortOptions;
  pageSize: number;
}

export interface FilterByPriceRequestType extends FilterByCategoryRequestType {
  selectedBrands: string[];
  minPrice: number;
  maxPrice: number;
}

export interface FilterByBrandsRequestType extends FilterByCategoryRequestType {
  selectedBrands: string[];
}

export interface ApiError {
  statusCode: number;
  data: any;
  errors: any[];
  message: string;
}

export interface PageChangeRequestType extends FilterByPriceRequestType {
  pageNumber: number;
}

export interface AddItemToCartRequest {
  cartID: string;
  cartItem: CartItem;
}

export interface RemoveItemFromCartRequest {
  cartID: string;
  prodID: string;
  prodColor: string;
}

export interface UpdateCartRequest {
  cartID: string;
  prodID: string;
  prodColor: string;
  prodQuant: number;
}

export interface WishlistRequest {
  prodID: string;
  isExists: boolean;
}
