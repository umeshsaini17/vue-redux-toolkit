import type { UserDetail } from "@/models/UserDetail";
import { createSlice } from "@reduxjs/toolkit";
import userActions from './usersThunk';

export enum ResponseStatus {
  Initial = 'initial',
  Pending = 'pending',
  Success = 'success',
  Failed = 'failed',
}

export type UsersState = {
  users: UserDetail[],
  status: ResponseStatus,
};

const initialState: UsersState = {
  users: [],
  status: ResponseStatus.Initial,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    removeUser: (state, action) => {
      state.users = state.users.filter(x => x.id !== action.payload);
    },
  },
  extraReducers(builder) {
    // fetchUsers
    builder.addCase(userActions.fetchUsers.pending, (state) => {
      state.status = ResponseStatus.Pending;
    });

    builder.addCase(userActions.fetchUsers.fulfilled, (state, action) => {
      console.log(state, action.payload);
      state.users = action.payload;
      state.status = ResponseStatus.Success;
    });

    builder.addCase(userActions.fetchUsers.rejected, (state) => {
      state.users = [];
      state.status = ResponseStatus.Failed;
    });
  },
});

export const { addUser, removeUser } = usersSlice.actions;
