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
    },
    asyncData({store, route}){
        store.dispatch('queryUser')
    },

}
</script>