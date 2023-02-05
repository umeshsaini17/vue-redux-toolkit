import { configureStore } from "@reduxjs/toolkit";
import logger from 'redux-logger';
import { usersSlice } from "./users/usersSlice";
import simpleValueReducer from './simple/simpleReducer';
import { productsApi } from "@/services/ProductService";

export const rootStore = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer, // Using RTK Query
    users: usersSlice.reducer,
    simpleValue: simpleValueReducer,
  },
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware()
      .concat([logger])
      .concat(productsApi.middleware),
});

export type RootState = ReturnType<typeof rootStore.getState>;
export type AppDispatch = typeof rootStore.dispatch;
