import Vue from 'vue'
import router from './router/router'
import Msg from './components/msg.vue'
import url from './Content/css/index.css'


new Vue({
    el: '#app',
    router,
    components: { Msg }
})
