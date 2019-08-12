import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from './components/login/Login'
import Activities from './components/activities/Activities'
import ActivitiesHome from './components/activities/ActivitiesHome'
import ActivitiesAdd from './components/activities/ActivitiesAdd'

import Companies from './components/decorative/Companies'
import Dashboard from './components/decorative/Dashboard'
import Persons from './components/decorative/Persons'
import Pipeline from './components/decorative/Pipeline'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Login },
    { path: '/atividades', component: Activities,
      children: [
          { path: '', component: ActivitiesHome },
          { path: 'adicionar', component: ActivitiesAdd },
          { path: 'editar/:id', component: ActivitiesAdd }
      ] },
    { path: '/empresas', component: Companies },
    { path: '/dashboard', component: Dashboard },
    { path: '/pessoas', component: Persons },
    { path: '/pipeline', component: Pipeline }
]

export default new VueRouter({
    routes,
    mode: 'history'
})