
import {createRouter, createWebHistory} from 'vue-router'
import HomeList from '../views/Home.vue'
import SummaryCalender from '../views/Summary.vue'
import SearchYoutube from '../views/Youtube.vue'

const routes = [
  {  
    path: '/mysite',
    name:'HomeList',
    component: HomeList
  },
  {
    path:'/summary',
    name: 'SummaryCalender',
    component: SummaryCalender
  },
  {
    path:'/youtube',
    name: 'SearchYoutube',
    component: SearchYoutube
  }

]

const router = createRouter({
  history: createWebHistory(process.env.Base_URL),
  routes
})

export default router