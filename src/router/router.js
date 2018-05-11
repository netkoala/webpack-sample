import Vue from 'vue'
import Router from 'vue-router'
import Msg2 from '../components/msg2.vue'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    base: '/',
    routes: [
        {
            path: '/',
            name: 'home'
        },
        {
            path: '/msg2',
            name: 'msg2',
            component: Msg2
        }
    ]
})
