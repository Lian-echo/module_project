import request from 'umi-request';
import { message } from 'antd';

//  请求拦截器
request.interceptors.request.use((url, options) => {
  return {
    url: `${url}&interceptors=yes`,
    options: { ...options, interceptors: true },
  };
});

// 响应拦截器
request.interceptors.response.use((response) => {
  const codeMaps = {
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
  };
  // message.error(codeMaps[response.status]);
  return response;
});

export default request;
