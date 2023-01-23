import type { UserDetail } from "@/models/UserDetail";
import { createAsyncThunk } from "@reduxjs/toolkit";

const getUserById = createAsyncThunk<UserDetail[], string>(
  'users/getById',
  async (userId: string) => {
    const response = await fetch(`https://dummyjson.com/users/${userId}`)
    return await response.json();
  },
);

const fetchUsers = createAsyncThunk<UserDetail[]>(
  'users',
  async () => {
    const response = await fetch('https://dummyjson.com/users').then(res => res.json());
    return response?.users?.slice(0, 10);
  },
);

export default {
  getUserById,
  fetchUsers,
};
