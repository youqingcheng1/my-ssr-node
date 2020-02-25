<template>
  <div class="bar">
    1111
  </div>
</template>

<script>
  const fetchInitialData = ({ store }) => {
    return store.dispatch('fetchBar');
  };

  export default {
    asyncData: fetchInitialData,
    created(){
      // store.commit('increment')
      // console.log(strore.state.count)
    },

    methods: {
    },

    mounted() {
      // 因为服务端渲染只有 beforeCreate 和 created 两个生命周期，不会走这里
      // 所以把调用 Ajax 初始化数据也写在这里，是为了供单独浏览器渲染使用
      let store = this.$store;
      store.commit('increment')
    },

    computed: {
    }
  }
</script>

<style lang="scss">
.bar {
  background: red;
}
</style>
