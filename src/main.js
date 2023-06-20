import { createApp } from 'vue'

import Vue from 'vue';
import VueFileAgent from 'vue-file-agent';
import VueFileAgentStyles from 'vue-file-agent/dist/vue-file-agent.css';

import App from './App.vue'

import { VueSelect } from 'vue-select'

const app = createApp(App)
.use(VueFileAgent)
.mount('#app')