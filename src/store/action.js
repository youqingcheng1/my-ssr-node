import http from "../config/http"

export default{
    async queryUser(content,id){
        const {data} = await http.home.queryUser();
        // console.log(data)
        content.commit('getList',data)
    }
}