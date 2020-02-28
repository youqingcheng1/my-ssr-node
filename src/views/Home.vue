<template>
    <div class="homePage">788536</div>
</template>
<script>
export default {
    name:'home',
    data(){
        return{
            
        }
    },
    created(){
        this.$store.commit('increment')
        console.log(this.$store.state.list)
    },
    asyncData({store, route}){
        // console.log(store)
        store.dispatch('queryUser')
    },

}
</script>