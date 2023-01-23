<template>
  <div>
    <label
      class="relative inline-flex items-center cursor-pointer"
    >
      <input @click="toggleValue()" type="checkbox" :value="val" class="sr-only peer" />
      <div
        class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
        >
      </div>
      <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
        Toggle me
      </span>
    </label>
    <div>Value from state: {{ val }}</div>
  </div>
</template>

<script setup lang="ts">
import { useDispatch, useSelector } from "../store/storePlugin";
import simpleSelector from "../store/simple/simpleSelector";
import simpleAction from "../store/simple/simpleAction";

const dispatch = useDispatch();
const val = useSelector(simpleSelector.getSimpleValue);

const toggleValue = () => {
  dispatch(simpleAction.toggleValue(!val.value));
};
</script>

