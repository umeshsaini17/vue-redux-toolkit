import type { UserDetail } from "@/models/UserDetail";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = 'https://dummyjson.com/users';

const getUserById = createAsyncThunk<UserDetail[], string>(
  'users/getById',
  async (userId: string) => {
    const response = await fetch(`${BASE_URL}/${userId}`)
    return await response.json();
  },
);

const fetchUsers = createAsyncThunk<UserDetail[]>(
  'users',
  async () => {
    const response = await fetch(BASE_URL).then(res => res.json());
    return response?.users?.slice(0, 10);
  },
);

export default {
  getUserById,
  fetchUsers,
};
