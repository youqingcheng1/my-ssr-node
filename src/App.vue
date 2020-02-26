<template>
  <div id="app">
    <div></div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name:"app",
  // asyncData({
  //     store,
  //     route
  // }){
  //   store.dispatch('queryUser')
  // },
  created () {
    // console.log('1233')
    this.queryUser()
  },

  // async asyncData ({ params }) {
  //       let { data } = await axios({
  //       method: 'get',
  //       url: 'http://10.0.13.65:3000/users'
  //     })
  //       return { posts: data.slice(0, 5) }
  //   },
  methods: {
      queryUser(){
       axios.get('http://10.0.13.65:3000/users')
        .then(function (response) {
          console.log(response);
        })
      }
  },

    //   async queryUser(){
    //     console.log(this.$http)
    //      const { data } = await this.$http.home();
    //   }
    // }
}
</script>
<style lang="scss" scoped>
#app{
  
}
</style>

