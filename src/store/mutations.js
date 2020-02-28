export default {
    increment(state){
        state.count++
    },
    getList(state,data){
        console.log(data)
        state.list=data;
        // console.log(state.list)
    }
}