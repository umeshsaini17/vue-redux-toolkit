import { rootStore } from '@/store/rootState';
import { getApiQuery } from '@/store/storePlugin';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';
import type { Ref } from 'vue';

interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  price: number;
}

interface ProductsResponse {
  products: Product[];
}

const BASE_URL = 'https://dummyjson.com/products';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: builder => ({
    getProductsByName: builder.query<ProductsResponse, string>({
      query: (name) => `/search?q=${name}`,
    }),
  }),
});

// API custom hook to call api and get products.
export const useGetProductsByNameQuery = (query: Ref<string>) => {
  return getApiQuery(rootStore, productsApi.endpoints.getProductsByName, query);
};

