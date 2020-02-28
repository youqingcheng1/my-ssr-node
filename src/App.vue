<template>
  <div id="app">
    <Home></Home>
  </div>
</template>

<script>
import axios from 'axios';
import Home from './views/Home';
export default {
  name:"app",
    created(){

  },
  components:{
    Home
  },
  methods: {

  },
}
</script>
<style lang="scss" scoped>
#app{
  
}
</style>

