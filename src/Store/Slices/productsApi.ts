import { Api } from "./Api";

export const productsApi = Api.injectEndpoints({
  endpoints: (builder) => ({
    // fetchProducts: builder.query<>()
  }),
});
