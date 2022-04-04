
import { createApp } from 'vue'
//import Vue from 'vue'
import App from './App.vue'
import './assets/css/style.css' 
import 'bootstrap/dist/css/bootstrap.css' 
import 'bootstrap-vue/dist/bootstrap-vue.css' 
import router from './router/index.js'
import VueChartJs from 'vue-chartjs';

createApp(App).use(VueChartJs)
createApp(App).use(router).mount('#app')
