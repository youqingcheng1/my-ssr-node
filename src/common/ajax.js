import axios from 'axios';
import { Message } from 'element-ui';
import { queryURLParam } from '@/common/utils';
let hasMessage = 0;

/**
 * 错误提示
 * @param { String } message 提示文字；
 * @param { Number } duration 时间；
 */
const errorTip = (message = '', duration = 2000) => {
    if(!hasMessage){
        hasMessage = 1;
        Message.error({
            message,
            duration,
            onClose() {
                hasMessage = 0;
            }
        })
    }
};

/**
 * 状态码响应
 * @param { Number } status http状态码；
 * @param { String } content 错误信息；
 */
const handleError = (status, content) => {
    switch (status){
        case 400:
        errorTip(`请求出错 - ${content}`, 2000);
        break;
        case 401:
        errorTip('登录失效，请重新登录', 2000);
        break;
        case 403:
        errorTip('您没有权限访问该接口', 2000);
        break;
        case 404:
        errorTip('请求出错，该接口不存在', 2000);
        break;
        case 405:
        errorTip(`请求出错 - ${content}`, 2000);
        break;
        default:
        errorTip(content, 2000);
        break;
    }
};

/**
 * 创建axios实例，同时设置20秒延时时间
 */
const ajax = axios.create({
    timeout: 1000*20
});

/**
 * post加请求头
 */
ajax.defaults.headers.post['Content-Type'] = 
    'application/x-www-form-urlencoded; charset=UTF-8';

/**
 * 请求拦截器
 */
ajax.interceptors.request.use(
    config => {
      // 请求头添加auth token
      const AUTH_TOKEN = sessionStorage.getItem('AUTH_TOKEN');
  
      AUTH_TOKEN && (config.headers['Authorization'] = `Bearer ${AUTH_TOKEN}`);
  
    //   请求头添加uin
      let newObj = {
      }
          config.params = newObj;
  
      return config;
    },
    error => Promise.reject(error)
  );

/**
 * 响应拦截器
 */
ajax.interceptors.response.use(
    response => 
        response.status === 200
            ? Promise.resolve(response)
            : Promise.reject(response),
    error => {
        const { response } = error;
        if( response.status < 500) {
            handleError(response.status, response.statusText);
        } else {
            errorTip(response.statusText, 2000);
        }

        return Promise.reject(response);
    }
);

export default ajax;

