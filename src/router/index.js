
import {createRouter, createWebHistory} from 'vue-router'
import HomeAbout from '../views/Home.vue'
import FormList from '../views/FormAndList.vue'
import SummaryCalender from '../views/Summary.vue'
import SearchYoutube from '../views/Youtube.vue'

const routes = [
  {  
    path: '/',
    name:'HomeAbout',
    component: HomeAbout
  },
  {  
    path: '/formlist',
    name:'FormList',
    component: FormList
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
  },
  {
    path:'/:paths(.*)*',
    name: 'routing',
    redirect:'/'
  }

]

const router = createRouter({
  history: createWebHistory(process.env.Base_URL),
  routes
})

export default router