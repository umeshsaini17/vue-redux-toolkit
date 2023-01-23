<template>
  <div>
    <button
      @click="addUserHandler()"
      type="button"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
    >
      Add User
    </button>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3">Name</th>
            <th scope="col" class="px-6 py-3">Email</th>
            <th scope="col" class="px-6 py-3">Age</th>
            <th scope="col" class="px-6 py-3">
              <span class="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="user in users"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ user.firstName }} {{ user.lastName }}
            </th>
            <td class="px-6 py-4">{{ user.email }}</td>
            <td class="px-6 py-4">{{ user.age }}</td>
            <td class="px-6 py-4 text-right">
              <a
                href="#"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >Edit</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { UserDetail } from "@/models/UserDetail";
import { addUser } from "@/store/users/usersSlice";
import { useDispatch, useSelector } from "../store/storePlugin";
import usersSelector from "@/store/users/usersSelector";
import usersThunk from "@/store/users/usersThunk";

const dispatch = useDispatch();
const users = useSelector(usersSelector.getUsers);

// Handler method to add a test user.
const addUserHandler = () => {
  const user: UserDetail = {
    id: "1",
    firstName: "Test",
    lastName: "User " + Math.floor(Math.random()*100),
    age: 30,
    email: "user@test.com",
  };
  dispatch(addUser(user));
};

// Getting users on initial load.
dispatch(usersThunk.fetchUsers());
</script>