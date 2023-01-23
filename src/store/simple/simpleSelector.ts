
import type { RootState } from "../rootState";

const getSimpleValue = (state: RootState) => {
  return state.simpleValue;
};

export default {
  getSimpleValue,
};
