<template>
  <header>
    <div
      class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700"
    >
      <ul class="flex flex-wrap -mb-px">
        <li class="mr-2" v-for="item in menu" :key="item.id">
          <a
            href="#"
            @click="menuClickHandler(item)"
            class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
            :class="selectedClass(item)"
            >{{ item.name }}</a
          >
        </li>
      </ul>
    </div>
  </header>
</template>

<script setup lang="ts">
import type { Menu } from '@/models/Menu';
import { ref } from 'vue';

const props = defineProps(['selected']);
const emit = defineEmits(['menuClick']);

const menu = ref<Menu[]>([]);
menu.value = [
  { name: 'Simple Reducer', id: 'simple' },
  { name: 'Using Slice (Users)', id: 'slice' },
  { name: 'RTK Query (Products)', id: 'rtk' },
];

const menuClickHandler = (menuItem: Menu) => {
  emit('menuClick', menuItem.id);
}

const selectedClass = (menuItem: Menu) => {
  const isSelected = props.selected === menuItem.id;
  return { active: isSelected, 'text-blue-600': isSelected, 'border-blue-600': isSelected };
};

</script>