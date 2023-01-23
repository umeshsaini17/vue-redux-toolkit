import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
// import type { Ref } from 'vue';

interface Product {
  id: string;
  title: string;
  price: number;
}

const BASE_URL = 'https://dummyjson.com/products';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: builder => ({
    getProducts: builder.query<Product, undefined>({
      query: () => '/search?q=phone',
    }),
  }),
});

export const { useGetProductsQuery } = productsApi as any;  // To check for types

// export const useGetProductsQuery = productsApi.endpoints.getProducts.useQuery;
