import type { EnhancedStore } from "@reduxjs/toolkit";
import { computed, inject, reactive, type App } from "vue";
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
