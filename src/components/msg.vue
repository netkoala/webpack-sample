<template lang="html">
<div class="message">
    {{ message }}
</div>
</template>

<script>
import url from '../Content/css/index.css'
export default {
  data:function () {
    return {
      message: 'Helo, .vue file1'
    }
  }
}
</script>

<style lang="css">
    .message {
        color: burlywood;
        
    }
</style>