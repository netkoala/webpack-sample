<template lang="html">
    <div class="message2">
        {{ message }}
        <div class="jq_test2"></div>
        <router-link :to="{ name: 'home'}">home</router-link>
    </div>
</template>

<script>

import $ from '../Content/js/vendor/jquery-3.2.1';
export default {
    created: function(){
        $(function () {
            $('.jq_test2').html('jquery is loaded2!')
        });
    },
    data:function () {
        return {
            message: 'Helo, .vue file2'
        }
    }
}
</script>

<style lang="css">
    .message2 {
        color: burlywood;
    }
</style>