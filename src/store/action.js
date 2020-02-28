import http from "../config/http"
import axios from "axios";

export default{

    async queryUser(content,id){
        let data = await axios.get('http://10.0.13.65:3000/users');
        // console.log(data.data.data);
        content.commit('getList',data.data.data)
    }
}