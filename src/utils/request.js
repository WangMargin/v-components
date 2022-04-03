import axios, { AxiosResponse } from 'axios';

// 创建 axios 实例
const request = axios.create({
  // API 请求的默认前缀
  baseURL: process.env.VUE_APP_API_BASE_URL,
  timeout: 120000, // 请求超时时间
});

// 异常拦截处理器
const errorHandler = error => {
  // if (error.response) {
  // }
  return Promise.reject(error.response);
};

// 请求拦截器
const requestHandler = config => {
  console.log(config);
  // // 如果 token 存在
  // // 让每个请求携带自定义 token, 请根据实际情况修改
  // if (savedToken) {
  //   config.headers[REQUEST_TOKEN_KEY] = 'bearer ' + savedToken;
  // }
  config.headers['REQUEST_TOKEN_KEY'] = 'bearer ' + 'test===wangyc';
  return config;
};

// Add a request interceptor
request.interceptors.request.use(requestHandler, errorHandler);

// 响应拦截器
const responseHandler = response => {
  return response.data;
};

// Add a response interceptor
request.interceptors.response.use(responseHandler, errorHandler);
export { AxiosResponse, request as axios };
export default request;
