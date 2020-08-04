import axios from 'axios'
import {openMessage} from "./common";
// import store from '../store'
// import { showLoading,hideLoading } from '../store/actions/global'

const instance = axios.create({
  timeout: 10000,
  headers: {'X-Requested-With': 'XMLHttpRequest'},
});

// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // store.dispatch(showLoading())
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  if (response.data.code === 1) {
    return response.data;
  } else {
    openMessage('error','请求失败')
    return response.data;
  }
}, function (error) {
  // 对响应错误做点什么
  openMessage('error','请求失败')
  return Promise.reject(error);
});

export default instance


