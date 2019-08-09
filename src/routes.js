import Login from './components/login/Login'
import Activities from './components/activities/Activities'
import ActivitiesHome from './components/activities/ActivitiesHome'
import ActivitiesAdd from './components/activities/ActivitiesAdd'

export const routes = [
    { path: '/', component: Login },
    { path: '/atividades', component: Activities,
      children: [
          { path: '', component: ActivitiesHome },
          { path: 'adicionar', component: ActivitiesAdd }
      ] }
]