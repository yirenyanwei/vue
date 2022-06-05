//数据请求的封装
import axios from "axios"
import { Toast } from "vant";

//1、所有的协议封装到不同方法中
/** 
function httpDetail(params) {
    return axios({
        url:`https://m.maizuo.com/gateway?filmId=${id}&k=6177393`,
        headers: {
            'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1651840005963928100175873","bc":"440100"}',
            'X-Host': 'mall.film-ticket.film.info'
        }
    })
}
*/

//2、axios 提供的方法 封装共同的参数
const http = axios.create({
    baseURL: 'https://m.maizuo.com',
    timeout: 10000,
    headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"1651840005963928100175873","bc":"440100"}',
    }
});
//在请求之前拦截--show loading
// Add a request interceptor
http.interceptors.request.use(function (config) {
    // Do something before request is sent
    //可以替换发送的config
    Toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration:0, //展示时长(ms)，值为 0 时，toast 不会消失
    });
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
//在请求成功后拦截--hide loading
// Add a response interceptor
http.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    Toast.clear()
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    Toast.clear()
    return Promise.reject(error);
  });
export default http