<template>
  <Header :selected="selectedMenu" @menuClick="menuClickHandler" />
  <main>
    <SimpleReducer v-if="selectedMenu === 'simple'" />
    <UsingSlice v-else-if="selectedMenu === 'slice'" />
    <RTKQuery v-else />
  </main>
</template>

<script setup lang="ts">
import Header from './components/Header.vue';
import SimpleReducer from './pages/SimpleReducer.vue';
import UsingSlice from './pages/UsingSlice.vue';
import RTKQuery from './pages/RTKQuery.vue';
import { ref } from 'vue';

const selectedMenu = ref('simple');

const menuClickHandler = (id: string) => {
  selectedMenu.value = id;
};

</script>

<style>
main {
  padding: 20px;
}
</style>