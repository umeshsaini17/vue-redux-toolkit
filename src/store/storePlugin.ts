import type { EnhancedStore } from "@reduxjs/toolkit";
import type { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore";
import { computed, inject, onUnmounted, reactive, ref, watch, type App, type Ref } from "vue";
import { rootStore, type RootState } from "./rootState";

export const storeKey = Symbol('Redux-Store');

export const useStore = () => {
  const store = <{ state: RootState }>inject(storeKey);
  return store;
};

export const createRedux = (store: EnhancedStore) => {
  const _state = reactive<{ state: RootState }>({ state: store.getState() });
  const redux = {
      install: (app: App) => {
          app.provide<{ state: RootState }>(storeKey, _state);

          store.subscribe(() => {
              _state.state = store.getState();
          });
      },
  };
  return redux;
};

export const useDispatch = () => rootStore.dispatch;

export const useSelector = <State extends RootState, T>(
  fn: (state: State) => T
)=> {
  const _state = inject(storeKey) as { state: RootState };

  return computed(() => fn(_state.state as State));
};

// Helper method used to infer action type.
export function withPayloadType<T>() {
  return (t: T) => ({ payload: t })
}

// Wrapper method used to create hook to consume RTK query api.
export const getApiQuery = <T>(store: ToolkitStore, apiEndpoint: any, query: Ref<T>) => {

  return useQuery(query);

  function useQuery(query: Ref<T>) {
    const state = ref(store.getState());
    const refetch = ref(() => {});
    const unsubscribe = ref(() => {});
  
    const unsubscribeStore = store.subscribe(() => {
      state.value = store.getState();
    });
  
    const responseHandler = () => {
      const result = rootStore.dispatch(apiEndpoint.initiate(query.value));
      refetch.value = result.refetch;
      unsubscribe.value = result.unsubscribe;
    };
  
    const result = computed(() => apiEndpoint.select(query.value)(state.value));
  
    const isLoading = computed(() => result.value.isLoading);
    const error = computed(() => result.value.isError);
    const data = computed(() => result.value.data);
  
    const fetch = () => {
      responseHandler();
    };
  
    watch(query, responseHandler);
  
    onUnmounted(() => {
      unsubscribeStore();
      unsubscribe.value();
    });
  
    return {
      data,
      fetch,
      refetch,
      isLoading,
      error,
    }
  }

};
