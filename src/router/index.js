import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Level from '../components/Level.vue'
import Option from '../components/Option.vue'
import Quiz from '../components/Quiz.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/level',
    name: 'Level',
    component: Level
  },
  {
    path: '/option',
    name: 'Option',
    component: Option
  },
  {
    path: '/quiz',
    name: 'Quiz',
    component: Quiz
  },
]

const router = new VueRouter({
  routes
})

export default router

