<template lang="html">
    <div class="message">
        {{ message }}
        <div class="jq_test"></div>
        <router-link :to="{ name: 'msg2' }">msg2 link</router-link>
    </div>
</template>

<script>
import $ from '../Content/js/vendor/jquery-3.2.1';
export default {
    created: function(){
        $(function () {
            $('.jq_test').html('jquery is loaded!')
        });
    },
    data:function () {
        return {
            message: 'Helo, .vue file1'
        }
    }
}
</script>

<style lang="css">
    .message {
        color:white;
    }
</style>