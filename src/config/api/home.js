import ajax from '../../common/ajax';
import qs from 'qs';
import { baseUrl } from '../base';

const home = {
    queryUser(param){
        // console.log(baseUrl)
        return ajax.get(`${baseUrl}`)
    }
}
export default home;