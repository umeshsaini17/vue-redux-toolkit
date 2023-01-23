// import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../rootState";

// Simple Selector
const getUsers = (state: RootState) => {
  return state.users?.users;
};

// Example of using createSelector
// const getTopUsers = () => createSelector<RootState, UsersState, UserDetail[]>(
//   getAllUsers,
//   (userState: UsersState) => {
//     return userState.users.slice(0, 10);
//   },
// )

export default {
  getUsers,
  // getTopUsers,
};
