import type { RootState } from "../rootState";

// Simple Selector
const getUsers = (state: RootState) => {
  return state.users?.users;
};

export default {
  getUsers,
};
