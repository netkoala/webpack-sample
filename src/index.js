import Vue from 'vue'
import $ from './Content/js/vendor/jquery-3.2.1';
import Msg from './components/msg.vue'

Vue.config.productionTip = false
new Vue({
    el: '#app',
    components: { Msg }
})
$(function () {
    $('.jq_test').html('jquery is loaded!')
})