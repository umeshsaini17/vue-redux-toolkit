import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'
import { rootStore } from './store/rootState';
import { createRedux } from './store/storePlugin';

createApp(App)
  .use(createRedux(rootStore))
  .mount('#app');
